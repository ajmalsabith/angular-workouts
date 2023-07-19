import { Component } from '@angular/core';

@Component({
  selector: 'app-parant',
  templateUrl: './parant.component.html',
  styleUrls: ['./parant.component.css']
})
export class ParantComponent {
   
  enterName='ajmal'
  parent=''
  transformdata(){
    this.parent=this.enterName
  }

  value=''
  new(values: string){
    this.value=values
  }

  maxvalues='rifan new fucker rifan '
  
} 
