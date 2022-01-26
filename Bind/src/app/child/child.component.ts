import { Component, OnInit,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
   @Output() greetEvent = new EventEmitter();
   name = "abhi";

  //@Input () loggedIn: boolean;
  constructor() {}
  ngOnInit(){

  }
  callParentgreet(){
    
    this.greetEvent.emit(this.name);
  
  }
 // @Input() chocolateCount;

  //@Output() thanks: EventEmitter<string> = new EventEmitter<string>();
  




}
