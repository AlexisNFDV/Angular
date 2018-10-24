import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { last } from '@angular/router/src/utils/collection';

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

  createEmployee(firstname, lastname, username, birthDate, address, phoneNumber, mail, job) {
    const payload = {
      'firstname': firstname,
      'lastname': lastname,
      'username': username,
      'birthDate': birthDate,
      'address': address,
      'phoneNumber': phoneNumber,
      'mail': mail,
      'job': job
    };

    this.datatopost = JSON.stringify(payload);

    return this.http.post(`${this.apiUrl}/create`, this.datatopost, this.httpOptions).subscribe(
        res => {
            console.log(res);
            this.router.navigate(['/employee']);
        },
        err => {
            console.log(err.message);
        }
    );
  }

  updateEmployee(employeeId, firstname, lastname, username, birthDate, address, phoneNumber, mail, job){
    const payload = {
      'firstname': firstname,
      'lastname': lastname,
      'username': username,
      'birthDate': birthDate,
      'address': address,
      'phoneNumber': phoneNumber,
      'mail': mail,
      'job': job
    };

    this.datatopost = JSON.stringify(payload);

    return this.http.put(`${this.apiUrl}/update/${employeeId}`, this.datatopost, this.httpOptions).subscribe(
        res => {
            console.log(res);
            this.router.navigate(['/employee']);
        },
        err => {
            console.log(err.message);
        }
    );
  }
}
