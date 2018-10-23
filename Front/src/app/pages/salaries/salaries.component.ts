import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';


@Component({
  selector: 'app-salaries',
  templateUrl: './salaries.component.html',
  styleUrls: ['./salaries.component.css']
})
export class SalariesComponent implements OnInit {

  salaries;

  constructor(private salariesService: ClientsService) {

    this.salariesService.getSalaries().subscribe(salaries => {
      this.salaries = salaries;
      console.log(salaries);
    })

  }

  ngOnInit() {

  }

  deleteUser(id) {
    this.salariesService
      .deleteSalarie(id).subscribe(resp => {
        console.log(resp);
      });
    // on recharge la page
    location.reload();
  }

}
