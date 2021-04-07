import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriceCardComponent } from './Common/price-card/price-card.component';
import { OrderCardComponent } from './Common/order-card/order-card.component';
import { OrderDetailsComponent } from './Component/order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PriceCardComponent,
    OrderCardComponent,
    OrderDetailsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
