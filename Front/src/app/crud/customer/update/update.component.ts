import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  formUpdate = {
    company: '',
    address: '',
    contact: '',
    businessLine: ''
  };
  customerId;

  constructor(private customerService: CustomerService, private route: ActivatedRoute, private router: Router) {

    this.route.params.subscribe((params) => {
      this.customerId = params['id'];
    });

    this.customerService.getOneUser(this.customerId).subscribe(customer => {
        this.formUpdate.company = customer['company'];
        this.formUpdate.address = customer['address'];
        this.formUpdate.contact = customer['contact'];
        this.formUpdate.businessLine = customer['businessLine'];
    });

  }

  ngOnInit() {
  }

  updateCustomer() {
    this.customerService.updateCustomer(
      this.customerId,
      this.formUpdate.company, 
      this.formUpdate.address, 
      this.formUpdate.contact, 
      this.formUpdate.businessLine
    );
  }

}
