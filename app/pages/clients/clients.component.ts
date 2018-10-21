import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients;

  constructor(private clientsService: ClientsService) {

    this.clientsService.getClients().subscribe(clients => {
      this.clients = clients;
      console.log(clients);
    })

  }

  ngOnInit() {

  }

  deleteClient(id) {
    this.clientsService
      .deleteClient(id).subscribe(resp => {
        console.log(resp);
      });
    // on recharge la page
    location.reload();
  }

}
