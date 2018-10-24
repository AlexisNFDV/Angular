import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  customer;
  customerId;

  constructor(private customerService: CustomerService, private route: ActivatedRoute, private router: Router) {

    this.route.params.subscribe((params) => {
      this.customerId = params['id'];
    });

    this.customerService.getOneUser(this.customerId).subscribe(customer => {
        this.customer = customer;
        console.log(customer);
    });

  }

  ngOnInit() {
  }

}
