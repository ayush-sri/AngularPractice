import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-notes',
  templateUrl: './child-notes.component.html',
  styleUrls: ['./child-notes.component.css']
})
export class ChildNotesComponent implements OnInit {
  @Input() notes;
  id:number;
  @Output()
  notify: EventEmitter<Number>=new EventEmitter<Number>();

  constructor() {
   }

  ngOnInit(): void {
  }

  delete(id){
    this.id=id;
    this.notify.emit(id);
  }

  // passData($event){
  //   console.log(this.id);
  //   this.notify.emit(this.id);
  // }

}
 