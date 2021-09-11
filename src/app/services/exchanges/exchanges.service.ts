import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExchangesService {
  private exchanges = new BehaviorSubject<object[]>([
    {price: '0.000', exchange: "bitfinex", symbol: ''},
    {price: '0.000', exchange: "binance", symbol: ''},
    {price: '0.000', exchange: "cexio", symbol: ''},
    {price: '0.000', exchange: "hitbtc", symbol: ''},
    {price: '0.000', exchange: "huobi", symbol: ''},
    // {price: '0.000', exchange: "poloniex", symbol: ''}
  ]);

  private exchanges$ = this.exchanges.asObservable();

  constructor() {
  }

  getExchanges(): Observable<any[]> {
    return this.exchanges$;
  }
}
