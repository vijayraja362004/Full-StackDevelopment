import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  EmployeeID:number;
  EmployeeName : String;
  EmployeeSalary : Number;

  
  constructor(){
    this.EmployeeID =101;
    this.EmployeeName = "Vijay";
    this.EmployeeSalary = 12000;
    
  }
}

