import { Component, OnInit } from '@angular/core';
import  *  as  data  from  './data.json';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  products: any = (data as any).default;
  constructor() { }

  ngOnInit(): void {
    console.log(this.products);
  }

}
