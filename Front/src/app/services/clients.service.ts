import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class ClientsService {

  apiUrl="http://localhost:4200/assets/data/data.json";
  //apiUrl = "http://localhost:3000/Clients/";

  datatopost;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient, private router: Router) {

  }

  // get all Clients
  getClients() {
    return this.http.get(this.apiUrl);
  }

  // get one user by Id
  getClient(id) {
    return this.http.get(this.apiUrl + id);
  }

  // create a user
  createClient(entreprise, location, contact, activite) {
    // body envoyé dans la requête, appelé payload
    const payload =
    {
      "Entreprise": entreprise,
      "Adresse": location,
      "Contact référent": contact,
      "Secteur d'activité": activite
    }

    // conversion en jSON
    this.datatopost = JSON.stringify(payload);

    // requête http en post qui renvoie resp ou err
    return this.http.post(this.apiUrl, this.datatopost, this.httpOptions).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err.message);
      }
    );
  }

  // mise à jour user
  updatedClient(username, name, website, id) {

    // body envoyé dans la requête, appelé payload
    const payload =
    {
      "name": username,
      "username": name,
      "website": website
    }

    // conversion en JSON
    this.datatopost = JSON.stringify(payload);

    // requête http en post qui renvoie resp ou err
    return this.http.put(this.apiUrl + id, this.datatopost, this.httpOptions).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err.message);
      }
    );

  }

  // suppression d'un user
  deleteClient(id) {
    return this.http.delete(this.apiUrl + id);
  }


  // get all Clients
  getSalaries() {
    return this.http.get(this.apiUrl);
  }

  // get one user by Id
  getSalarie(id) {
    return this.http.get(this.apiUrl + id);
  }

  // create a user
  createSalarie(firstname, lastname, username, birth, location, phone, mail, poste) {
    // body envoyé dans la requête, appelé payload
    const payload =
    {
      "Nom": firstname,
      "Prénom": lastname,
      "Pseudo": username,
      "Date de naissance": birth,
      "Adresse": location,
      "Téléphone": phone,
      "Mail": mail,
      "Poste": poste
    }

    // conversion en jSON
    this.datatopost = JSON.stringify(payload);

    // requête http en post qui renvoie resp ou err
    return this.http.post(this.apiUrl, this.datatopost, this.httpOptions).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err.message);
      }
    );
  }

  // mise à jour user
  updateSalarie(id, firstname, lastname, username, birth, location, phone, mail, poste) {
    // body envoyé dans la requête, appelé payload
    const payload =
    {
      "Nom": firstname,
      "Prénom": lastname,
      "Pseudo": username,
      "Date de naissance": birth,
      "Adresse": location,
      "Téléphone": phone,
      "Mail": mail,
      "Poste": poste
    }

    // conversion en JSON
    this.datatopost = JSON.stringify(payload);

    // requête http en post qui renvoie resp ou err
    return this.http.put(this.apiUrl + id, this.datatopost, this.httpOptions).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err.message);
      }
    );

  }

  // suppression d'un user
  deleteSalarie(id) {
    return this.http.delete(this.apiUrl + id);
  }

  // get all Clients
  getProjets() {
    return this.http.get(this.apiUrl);
  }

  // get one user by Id
  getProjet(id) {
    return this.http.get(this.apiUrl + id);
  }

  // create a user
  createProjet(name, desc, start, end, client, salaries, montant, statut) {
    // body envoyé dans la requête, appelé payload
    const payload =
    {
      "Nom": name,
      "Description": desc,
      "Début": start,
      "Fin": end,
      "Client": client,
      "Salariés associés": salaries,
      "Montant total": montant,
      "Statut": statut
    }

    // conversion en jSON
    this.datatopost = JSON.stringify(payload);

    // requête http en post qui renvoie resp ou err
    return this.http.post(this.apiUrl, this.datatopost, this.httpOptions).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err.message);
      }
    );
  }

  // mise à jour user
  updateProjet(id, name, desc, start, end, client, salaries, montant, statut) {
    // body envoyé dans la requête, appelé payload
    const payload =
    {
      "name": name,
      "description": desc,
      "Début": start,
      "Fin": end,
      "Client": client,
      "Salariés associés": salaries,
      "Montant total": montant,
      "Statut": statut
    }

    // conversion en JSON
    this.datatopost = JSON.stringify(payload);

    // requête http en post qui renvoie resp ou err
    return this.http.put(this.apiUrl + id, this.datatopost, this.httpOptions).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err.message);
      }
    );

  }

  // suppression d'un user
  deleteProjet(id) {
    return this.http.delete(this.apiUrl + id);
  }


}
