import {Injectable} from '@angular/core';
import {webSocket} from 'rxjs/webSocket';
import {environment as env} from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private subject;
  public msg;

  constructor() {
  }

  connect(currency) {
    const wbUrl = env.wsUrl + currency + env.exUrl;
    this.subject = webSocket(wbUrl)
    this.subject.subscribe(
      (msg: any) => {
        this.msg = msg;
        // const prices = msg.result.asks.prices;
        // msg.result.asks.prices = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
        // this.countAverange(msg.result.asks.prices)
        // const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
        //
        // average([99, 45, 26, 7, 11, 122, 22]);
        // console.log(average)
      }, // Called whenever there is a message from the server.
      err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      () => console.log('complete') // Called when connection is closed (for whatever reason).
    );
  }

  countAverange(arr) {
    const prices = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
    console.log(prices)
  }

  disconnect() {
    console.log('DISCONNECTED:');
    console.log(this.subject);
    if (this.subject !== undefined && this.subject) {
      this.subject.unsubscribe();
      console.log('ENTER IF DISCONNECTED')
    }
    return
  }

  // let arrayLength: number = msg.result.asks.prices.length;
  // this.max = msg.result.asks.prices.reduce((a, b) => Math.max(a, b));
  // this.average = (this.total / arrayLength);

  // getArrayMax(array) {
  //   return Math.max.apply(null, array);
  // }
  //
  // getArrayMin(array) {
  //   return Math.min.apply(null, array);
  // }

  // calcMedian(data) {
  //   const half = Math.floor(data.bids.prices.length / 2);
  //   data.bids.prices.sort(function (a, b) {
  //     return a - b;
  //   });
  //   if (data.bids.prices.length % 2) {
  //     this.price = data.bids.prices[half];
  //     this.updateItem(data.exchange, data.symbol)
  //     console.log(this.price);
  //     return this.price;
  //   } else {
  //     return (data.bids.prices[half - 1] + data.bids.prices[half]) / 2.0;
  //   }
  // }

  // updateItem(exchange: string, symbol) {
  //   this.es.getExchanges().subscribe(data => {
  //     let objIndex = data.findIndex((obj => obj.exchange == exchange));
  //     data[objIndex].price = this.price;
  //     data[objIndex].symbol = symbol;
  //   })
  // }

}
