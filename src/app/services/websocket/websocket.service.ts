import {Injectable} from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import {Data} from "../../models/data.model";
import {environment as env} from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public price;
  exchanges: any = [
    'bitfinex',
    'binance',
    'cexio',
    'hitbtc',
    'huobi',
    'poloniex',
  ];

  myObjArray = [
    {price: 0.0000, exchange: "bitfinex", symbol: ''},
    {price: 0.0000, exchange: "binance", symbol: ''},
    {price: 0.0000, exchange: "cexio", symbol: ''},
    {price: 0.0000, exchange: "hitbtc", symbol: ''},
    {price: 0.0000, exchange: "huobi", symbol: ''},
    {price: 0.0000, exchange: "poloniex", symbol: ''}
  ];

  constructor() {
  }

  updateItem(exchange: string, symbol) {

//Find index of specific object using findIndex method.
    let objIndex = this.myObjArray.findIndex((obj => obj.exchange == exchange));

//Log object to Console.
    console.log("Before update: ", this.myObjArray[objIndex])

//Update object's name property.
    this.myObjArray[objIndex].price = this.price;
    this.myObjArray[objIndex].symbol = symbol;

//Log object to console again.
    console.log("After update: ", this.myObjArray[objIndex])

  }

  getWsData(currency) {
    for (let exchange of this.exchanges) {
      let ws: WebSocketSubject<any> = webSocket(env.wsUrl + currency + '&exchanges=' + exchange);
      ws.subscribe(
        msg => {
          this.calcMedian(msg.result);
          return;
        },
        err => console.log(err),
        () => console.log('complete')
      )
    }


  }

  calcMedian(data) {
    const half = Math.floor(data.bids.prices.length / 2);
    data.bids.prices.sort(function (a, b) {
      return a - b;
    });

    if (data.bids.prices.length % 2) {
      this.price = data.bids.prices[half];
      this.updateItem(data.exchange, data.symbol)
      // console.log(this.dataList);
      return this.price;
    } else {
      return (data.bids.prices[half - 1] + data.bids.prices[half]) / 2.0;
    }
  }
}
