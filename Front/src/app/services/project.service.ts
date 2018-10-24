import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class ProjectService {

  apiUrl = 'http://localhost:3000/project';
  datatopost;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient, private router: Router) { }

  getProjects() {
    return this.http.get(this.apiUrl + '/list');
  }

  delete(id) {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  getOneProject(id) {
    return this.http.get(`${this.apiUrl}/view/${id}`);
  }

  createProject(compagny, address, contact, businessLine) {
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
            this.router.navigate(['/project']);
        },
        err => {
            console.log(err.message);
        }
    );
  }

  updateProject(projectId, name, description, start_date, end_date, customer, employee, amount, status) {
    const payload = {
      'name': name,
      'description': description,
      'start_date': start_date,
      'end_date': end_date,
      'customer': customer,
      'employee': employee,
      'amount': amount,
      'status': status
    };

    this.datatopost = JSON.stringify(payload);

    return this.http.put(`${this.apiUrl}/update/${projectId}`, this.datatopost, this.httpOptions).subscribe(
        res => {
            console.log(res);
            this.router.navigate(['/project']);
        },
        err => {
            console.log(err.message);
        }
    );
  }
}
