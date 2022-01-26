import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']
})
export class CardetailsComponent implements OnInit {

  car=[];
  constructor(private _cartService:CartService) { }


  

  ngOnInit(): void {
    this.car=this._cartService.getCar();
  }

}

