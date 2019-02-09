import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ChartStockModule } from './chart-stock/chart-stock.module';
import { BothChartComponent } from './both-chart/both-chart.component';
import { MarketPageComponent } from './market-page/market-page.component';

@NgModule({
  declarations: [AppComponent, BothChartComponent, MarketPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartStockModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
