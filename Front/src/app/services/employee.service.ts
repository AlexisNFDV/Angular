import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class EmployeeService {

  apiUrl = 'http://localhost:3000/employee';
  datatopost;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient, private router: Router) { }

  getUsers() {
    return this.http.get(this.apiUrl + '/list');
  }

  delete(id) {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  getOneUser(id) {
    return this.http.get(`${this.apiUrl}/view/${id}`);
  }

  createCustomer(compagny, address, contact, businessLine) {
    const payload = {
      'company': compagny,
      'address': address,
      'contact': contact,
      'businessLine': businessLine
    };

    this.datatopost = JSON.stringify(payload);

    return this.http.post(`${this.apiUrl}/create`, this.datatopost, this.httpOptions).subscribe(
        res => {
            console.log(res);
            this.router.navigate(['/customer']);
        },
        err => {
            console.log(err.message);
        }
    );
  }

  updateCustomer(customerId, compagny, address, contact, businessLine) {
    const payload = {
      'company': compagny,
      'address': address,
      'contact': contact,
      'businessLine': businessLine
    };

    this.datatopost = JSON.stringify(payload);

    return this.http.put(`${this.apiUrl}/update/${customerId}`, this.datatopost, this.httpOptions).subscribe(
        res => {
            console.log(res);
            this.router.navigate(['/customer']);
        },
        err => {
            console.log(err.message);
        }
    );
  }
}
