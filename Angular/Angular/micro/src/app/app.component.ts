import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 PlateNo:string;
 durationIn:string;
 durationOut:string;
 phoneNo:string;
 colorOfTheCar:string;

 constructor(){
  this.PlateNo="TN39AV0066";
  this.phoneNo="9123456780";
  this.durationIn="10";
  this.durationOut="20";
  this.colorOfTheCar="neon";
 }
 entry(){
  alert("go and park at the");
 }
 clear(){
  this.PlateNo="";
  this.phoneNo="";
  this.durationIn="";
  this.durationOut="";
  this.colorOfTheCar="";
 }
 floor(){

 }
  
}
