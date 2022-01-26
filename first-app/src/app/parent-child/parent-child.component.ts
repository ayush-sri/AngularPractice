import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {
  notesList: string[]=[];

  push({ target }){
    const{ value }= target;
    this.notesList.push(value);

  }
  constructor() { }

  ngOnInit(): void {
  }

}
