import { Component } from '@angular/core';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  name : string='';
  id :number=0;
  salary:number=0;
  timein:string='';
  timeout:string='';

  displayname :string='';
  displayid : number=0;
  displaysalary :number=0;
  displaytimein :string='';
  displaytimeout : string='';


display()
{
  this.displayname =this.name
  this.displayid =this.id
  this.displaysalary =this.salary
  this.displaytimein =this.timein
  this.displaytimeout =this.timeout

}
}


