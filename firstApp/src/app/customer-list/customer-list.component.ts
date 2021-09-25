import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customer : string ="";

  customers: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.customer = (document.getElementById("customer") as HTMLInputElement).value;
    if (this.customer.length !== 0) {
      this.customers.push(this.customer);
      (document.getElementById("customer") as HTMLInputElement).value = "";
    }
  }

}
