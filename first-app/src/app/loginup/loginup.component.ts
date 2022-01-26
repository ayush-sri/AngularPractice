import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginup',
  templateUrl: './loginup.component.html',
  styleUrls: ['./loginup.component.css']
})
export class LoginupComponent implements OnInit {
   usernameis: string;
   passwordis: string;

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
   console.log(this.usernameis, this.passwordis);
   sessionStorage.setItem("Username", this.usernameis)
   
  }

}
