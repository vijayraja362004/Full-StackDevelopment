import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicenameService {
  getAddition(a:number,b:number){
    return a+b;
  }
  getSubraction(a:number,b:number){
    return a-b;
  }

  constructor() { }
}
