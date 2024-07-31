import { Component } from '@angular/core';
import { ServicenameService } from './servicename.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name :String;
  age : Number;
  email : string;
  pic:string;
  fname:string;
  flag:boolean;
  vehicles:string[];
  selec:string;
  myStyle:{};
  myClass:string;
  sum:number;

  constructor(private calc :ServicenameService){
    this.sum=calc.getAddition(10,20);
   // this.sum=calc.getSubraction(10,20);
    this.name = "Vijay";
    this.age = 20;
    this.email = "vijayraja33@gmail.com"
    this.pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmka1151lcgF4UjzJdPgsDQOXhPyVI6sx7XA&s";
    this.fname=" ";
    this.flag=true;
    this.vehicles=["pulser","m4","m5","Invalid"]
    this.selec="";
    this.myStyle={'width':'40%','height':'40%','border':'2px solid green','border-radius':'25px'}
    this.myClass="MyClass1";
    }
  changename(){
    this.name="arun";
    this.age=22;
    this.email="arn22@gmail.com"
  }
  redo(){
    this.pic="https://imgs.search.brave.com/9x7JYlUSWatwNNMlEOK8XPZGKsdqjbbLDodRaeNj3tQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sZWNv/bnRlbnQuc29sb2xl/YXJuLmNvbS9zdGF0/aWMtcGFnZXMvYW5n/dWxhci9Bbmd1bGFy/TmV3LnBuZw";
  }
  changeflag(){
    this.flag=!this.flag;
  }  
  setSelectedItem(v:string){
    this.selec=v;
  }
  selectedVehicle(){

  }
  changeStyle(){
    this.myStyle={'width':'40%','height':'45%','border':'5px solid yellow','border-radius':'20px'

    }
  }
  changeClass(){
    this.myClass="myClass2";
  }
}
