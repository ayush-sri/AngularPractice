import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  i: number
  user: string
  address: string
  phonenumber: number
  pincode: number
  bloodgroup: string
  data: Boolean[] = [true, false, false, false, false];



  tata: {}[] = [{
    "user": "User1",
    "address": "Bangalore",
    "phonenumber": "1234512345",
    "pincode": "560098",
    "bloodgroup": "A+"
  }, {
    "user": "User2",
    "address": "Mumbai",
    "phonenumber": "1234512345",
    "pincode": "220033",
    "bloodgroup": "B+"
  }, {
    "user": "User3",
    "address": "Delhi",
    "phonenumber": "1234512345",
    "pincode": "560098",
    "bloodgroup": "0+",
  }, {
    "user": "User4",
    "address": "USA",
    "phonenumber": "1234512345",
    "pincode": "560044",
    "bloodgroup": "A-"
  }, {
    "user": "Users",
    "address": "Japan",
    "phonenumber": "1234512345",
    "pincode": "230098",
    "bloodgroup": "B-"

  }];
  constructor() { }

  // obj:{}={ user:"",
  //   address:"",
  //   phonenumber:"",
  //   pincode:"",
  //   bloodgroup:""}
  ngOnInit(): void { }



  ur() {
    if (this.data[0] == false) {
      this.data[0] = true;
    }
    else {
      this.data[0] = false;
      // for (this.i = 1; this.i < this.data.length; this.i++) {
      //   this.data[this.i] = false;
      // }
    }
  }

  ad() {
    if (this.data[0] == true && this.data[1] == false) {
      this.data[1] = true;
    }
    else {
      this.data[1] = false;
    }
  }

  ph() {
    if (this.data[0] && this.data[2] == false) {
      this.data[2] = true;
    }
    else
      this.data[2] = false;
  }

  pi() {
    if (this.data[0] && this.data[3] == false) {
      this.data[3] = true;
    }
    else {
      this.data[3] = false;
    }
  };

  bl() {
    if (this.data[0] && this.data[4] == false) {
      this.data[4] = true;
    }
    else {
      this.data[4] = false;
    }
  };

}


/*   pushData(){
    this.data.push();
}
} */



