import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from './shared/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstApp';
  name: string = "Hello world";
  empl: Employee = {
    name: "",
    address: "",
    department: ""
  };

  empList : Employee [] =[];

  onSubmit(form: NgForm) {
    this.empl = form.value;
    console.log(this.empl)
    this.empList.push(this.empl);
  }
}
