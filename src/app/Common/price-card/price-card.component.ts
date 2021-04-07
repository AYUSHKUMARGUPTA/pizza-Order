import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.css']
})
export class PriceCardComponent implements OnInit {
  @Input('items') Items: any;
  public totalAmount: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.Items.forEach((element: any) => {
      this.totalAmount += element.amount;
    });
  }

}
