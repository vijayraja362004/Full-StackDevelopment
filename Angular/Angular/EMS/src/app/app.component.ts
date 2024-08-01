import { Component } from '@angular/core';
import { Employee } from './model/Employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  employee :Employee;
  constructor(private service:EmployeeService){
    this.employee=new Employee();
  }

  insert(data:any)
  {
    this.employee.empId=data.empId;
    this.employee.empName=data.empName;
    this.employee.empSalary=data.empSalary;
    this.service.insertEmployee(this.employee);
    alert(data.empId+" "+data.empName+" "+data.empSalary);
  }
}
