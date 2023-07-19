import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {

  @Input() parentdata:string=''
  @Input() newval:string=''

  newvals='ajmlasalim'
  
  @Output() public senddata=new EventEmitter<string>()

ngOnInit():void
{
  this.senddata.emit(this.newvals)
}  
  


}