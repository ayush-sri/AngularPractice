import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  
  getCar(){
    return [{"points":10,"name":"BMW M4","year":2021},
    {"points":9,"name":"Audi Q7","year":2019},
    {"points":9,"name":"Lamborghini Hurracan","year":2016},
    {"points":5,"name":"Honda evo e2","year":2018}
    ];
  }
}
