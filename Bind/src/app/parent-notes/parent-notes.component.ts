import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-notes',
  templateUrl: './parent-notes.component.html',
  styleUrls: ['./parent-notes.component.css']
})
export class ParentNotesComponent implements OnInit {

  date:Date;
  value="";
  id:number=1;
  notes:{}[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  obj:{}={Id:Number,time:Date,data:String};
  submit(){
    
    this.date=new Date();
    this.obj={id:this.id,time:this.date,data:this.value};
    this.notes.push(this.obj);
    this.value="";
    this.id=this.id+1;
  }

  s:number;
  num:number;
  parentMethod(i){
    this.notes.splice(i-1,1);
    //s:Number=0;
    for(this.s=0;this.s<this.notes.length;this.s=this.s+1){
      this.notes[this.s]["id"]=this.s+1;
    }
    this.id=this.s+1;
  }
}


  


