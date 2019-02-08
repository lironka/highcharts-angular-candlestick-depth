import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartStockService {
  constructor(private http: HttpClient) {}

  getCandleData() {
    return this.http.get('./assets/data/aapl-ohlcv.json');
  }
}
