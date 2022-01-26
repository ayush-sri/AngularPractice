import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arr: Boolean[] = [true, false, false, false, false];
  i: number;



  user_data: {}[] = [{
    "user": "User1",
    "address": "banglore",
    "phonenumber": "1234512345",
    "pincode": "560098",
    "bloodgroup": "A+"
  }, {
    "user": "User2",
    "address": "banglore",
    "phonenumber": "1234512345",
    "pincode": "560098",
    "bloodgroup": "A+"
  }, {
    "user": "User3",
    "address": "Delhi",
    "phonenumber": "1234512345",
    "pincode": "260098",
    "bloodgroup": "O-"
  }, {
    "user": "User4",
    "address": "Delhi",
    "phonenumber": "1234512345",
    "pincode": "569998",
    "bloodgroup": "O+"
  }, {
    "user": "User5",
    "address": "Japan",
    "phonenumber": "1234512345",
    "pincode": "560099",
    "bloodgroup": "B-+"
  }];


  constructor() { }

  ngOnInit(): void {
  }

  ur() {
    if (this.arr[0] == false) {
      this.arr[0] = true;
    }
    else {
      this.arr[0] = false;
      for (this.i = 1; this.i < this.arr.length; this.i++) {
        this.arr[this.i] = false;
      }
    }
  }

  ad() {
    if(this.arr[0]==true && this.arr[1]==false){
      this.arr[1]=true;
    }
    else{
      this.arr[1]=false;
    }
  }

  ph() {
    if(this.arr[0] && this.arr[1] && this.arr[2]==false){
      this.arr[2]=true;
    }
    else
        this.arr[2]=false;
  }

  pi() {
    if(this.arr[0]&& this.arr[1] && this.arr[2] && this.arr[3]==false){
      this.arr[3]=true;
    }
    else{
      this.arr[3]=false;
    }
  }

  bd() {
    if(this.arr[0]&& this.arr[1] && this.arr[2] && this.arr[3] && this.arr[4]==false){
      this.arr[4]=true;
    }
    else{
      this.arr[4]=false;
    }
  }

}
  
 