import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course= [
    {'id':1,'name':'Learn Angular','description':'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.','image':'../../assets/angular.jpg'},
    {'id':2,'name':'Learn Typescript','description':'TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.','image':'../../assets/typescript.jpg'},
    {'id':3,'name':'Learn Nodejs','description':'As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.','image':'../../assets/nodejs.jpg'},
    {'id':4,'name':'Learn Reactjs','description':'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.','image':'../../assets/reactjs.jpg'},
  ]

}
