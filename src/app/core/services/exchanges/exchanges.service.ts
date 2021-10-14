import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExchangesService {
  private exchanges = new BehaviorSubject<object[]>([
    {id: 0, price: '0.000', exchange: "bitfinex", symbol: ''},
    {id: 1, price: '0.000', exchange: "binance", symbol: ''},
    {id: 2, price: '0.000', exchange: "bittrex", symbol: ''},
    {id: 3, price: '0.000', exchange: "cexio", symbol: ''},
    {id: 4, price: '0.000', exchange: "hitbtc", symbol: ''},
    {id: 5, price: '0.000', exchange: "huobi", symbol: ''},
    {id: 6, price: '0.000', exchange: "coinbase", symbol: ''},
    {id: 7, price: '0.000', exchange: "zb", symbol: ''},
    {id: 7, price: '0.000', exchange: "bithub", symbol: ''},
  ]);

  private exchanges$ = this.exchanges.asObservable();

  constructor() {
  }

  getExchanges(): Observable<any[]> {
    return this.exchanges$;
  }
}
