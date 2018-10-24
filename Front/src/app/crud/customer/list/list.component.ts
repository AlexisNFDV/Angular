import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  customers;

  constructor(private customerService: CustomerService) {

    this.customerService.getUsers().subscribe(customers => {
        this.customers = customers;
        console.log(customers);
    });

  }

  ngOnInit() {
  }

  deleteCustomer(id) {
    this.customerService.delete(id).subscribe(res => {
        window.location.reload();
    });
}

}
