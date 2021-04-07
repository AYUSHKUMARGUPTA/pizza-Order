import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {
  @Input('details') Details:any;
  showModal = false; 
  constructor() { }

  ngOnInit(): void {
  }
  toNextStage(id:number,status:string):void {
    if(status ==='Order Recieved'){
      this.Details.orderStatus = "Preparing";
    }else if(status ==='Preparing'){
      this.Details.orderStatus = "Ready to Serve";
    }
  }
  openModal(id:number){
    this.showModal = true;
  }
  hide(){
    this.showModal = false;
  }

}
