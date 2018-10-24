import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  formCreate = {
    company: '',
    address: '',
    contact: '',
    businessLine: ''
  };

  constructor(private customerService: CustomerService, private route: Router) { }

  ngOnInit() {
  }

  createCustomer() {
    this.customerService.createCustomer(
      this.formCreate.company, 
      this.formCreate.address, 
      this.formCreate.contact, 
      this.formCreate.businessLine
    );
  }

}
