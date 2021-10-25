import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Exchange} from '../../interfaces/exchanges.interface';

@Injectable({
  providedIn: 'root'
})
export class ExchangesService {
  private exchanges = new BehaviorSubject<Exchange[]>([
    {id: 0, price: '0.000', exchange: "bitfinex", symbol: '', image: '',},
    {id: 1, price: '0.000', exchange: "binance", symbol: '', image: '',},
    {id: 2, price: '0.000', exchange: "bittrex", symbol: '', image: '',},
    {id: 3, price: '0.000', exchange: "cexio", symbol: '', image: '',},
    {id: 4, price: '0.000', exchange: "hitbtc", symbol: '', image: '',},
    {id: 5, price: '0.000', exchange: "huobi", symbol: '', image: '',},
    {id: 6, price: '0.000', exchange: "coinbase", symbol: '', image: '',},
    {id: 7, price: '0.000', exchange: "zb", symbol: '', image: '',},
    {id: 8, price: '0.000', exchange: "bithumb", symbol: '', image: '',},
  ]);

  private exchanges$ = this.exchanges.asObservable();

  constructor() {
  }

  getExchanges(): Observable<Exchange[]> {
    return this.exchanges$;
  }
}
