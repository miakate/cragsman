import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExchangesService {
  private exchanges = new BehaviorSubject<object[]>([
    {id: 0, price: '0.000', exchange: "bitfinex", symbol: '', image: 'news_image_3@2x.png',},
    {id: 1, price: '0.000', exchange: "binance", symbol: '', image: 'news_image_3@2x.png',},
    {id: 2, price: '0.000', exchange: "bittrex", symbol: '', image: 'news_image_3@2x.png',},
    {id: 3, price: '0.000', exchange: "cexio", symbol: '', image: 'news_image_3@2x.png',},
    {id: 4, price: '0.000', exchange: "hitbtc", symbol: '', image: 'news_image_3@2x.png',},
    {id: 5, price: '0.000', exchange: "huobi", symbol: '', image: 'news_image_3@2x.png',},
    {id: 6, price: '0.000', exchange: "coinbase", symbol: '', image: 'news_image_3@2x.png',},
    {id: 7, price: '0.000', exchange: "zb", symbol: '', image: 'news_image_3@2x.png',},
    {id: 7, price: '0.000', exchange: "bithub", symbol: '', image: 'news_image_3@2x.png',},
  ]);

  private exchanges$ = this.exchanges.asObservable();

  constructor() {
  }

  getExchanges(): Observable<any[]> {
    return this.exchanges$;
  }
}
