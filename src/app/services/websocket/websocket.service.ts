import {Injectable} from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import {environment as env} from '../../../environments/environment.prod';
import {ExchangesService} from "../exchanges/exchanges.service";

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
  ];

  constructor(private es: ExchangesService) {
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
      console.log(this.price);
      return this.price;
    } else {
      return (data.bids.prices[half - 1] + data.bids.prices[half]) / 2.0;
    }
  }

  updateItem(exchange: string, symbol) {
    this.es.getExchanges().subscribe(data => {
      let objIndex = data.findIndex((obj => obj.exchange == exchange));
      data[objIndex].price = this.price;
      data[objIndex].symbol = symbol;
    })
  }

}
