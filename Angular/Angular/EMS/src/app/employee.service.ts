import { Injectable } from '@angular/core';
import { Employee } from './model/Employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  insertEmployee(employee:Employee)
  {
    this.http.post("http://localhost:3004/",employee).subscribe();

  }
}
