import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  car=[];
    constructor(private _cartService:CartService) { }
  
  
    
  
    ngOnInit(): void {
      this.car=this._cartService.getCar();
    }
  
  }
  
  