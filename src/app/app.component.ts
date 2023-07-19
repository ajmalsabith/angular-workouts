import { Component,OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  
  constructor(private http:HttpClient){
    console.log('how are you');
  }
  title = 'userManageapp';
  data:number=0
  text:string='ajmlasassfffcccfg'

   date = new Date().toDateString()
  

  values:any[]=['ajmal','sabith',67,'salim',99]
  
  ngOnInit(): void {
    console.log('iam fain');
    this.reset()
  }

  reset(){
    this.data=0
     console.log('start');
  }

  arr=[3,4,'string',7,8,'values',11,'array']

  //  val= this.arr.reduce((acc:number,val:number):number=>{
  //       return acc+val
  // })


  val= this.arr.filter((value:any,index:any):any=>{
    if (typeof value==='string') {
        return value      
    }
  })






  submit(){
    this.http.get('https://randomuseme/api/').subscribe((res)=>{
       console.log(res);
       
  },err((err)=>{
      this.text='null values'
  }))

  }

 





}
function err(arg0: (err: any) => void): ((error: any) => void) | null | undefined {
  throw new Error('Function not implemented.');
}

