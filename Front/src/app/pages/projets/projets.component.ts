import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {

  projets;

  constructor(private projetsService: ClientsService) {

    this.projetsService.getProjets().subscribe(projets => {
      this.projets = projets;
      console.log(projets);
    })

  }

  ngOnInit() {

  }

  deleteProjet(id) {
    this.projetsService
      .deleteProjet(id).subscribe(resp => {
        console.log(resp);
      });
    // on recharge la page
    location.reload();
  }

}
