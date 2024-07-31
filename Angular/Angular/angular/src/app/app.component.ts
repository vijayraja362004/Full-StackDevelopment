import { Component } from '@angular/core';

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

  constructor(){
    this.name = "Arun";
    this.age = 20;
    this.email = "arun33@gmail.com"
    this.pic="https://imgs.search.brave.com/XOC7JgPGPOKRw7KFh5muDZK2IDKPuOk86kkjVXVPZDU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaWRnZXNnLm5l/dC9pbWFnZXMvYXJ0/aWNsZS8yMDIwLzAy/L2NpYS10cmlhZF9z/ZWN1cml0eV90cmlh/bmdsZS1nbG93aW5n/X2JpbmFyeV9wcm9j/ZXNzX2J5LW5vbGlt/aXQ0Ni1nZXR0eV8y/NDAweDE2MDAtMTAw/ODMxNTg5LWxhcmdl/LmpwZz9hdXRvPXdl/YnAmcXVhbGl0eT04/NSw3MA";
    this.fname=" ";
    this.flag=true;
    this.vehicles=["series 5","m4","m5","Invalid"]
    this.selec="";
    this.myStyle={'width':'40%','height':'40%','border':'2px solid green','border-radius':'25px'}
    this.myClass="MyClass1";
    }
  changename(){
    this.name="aun";
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
