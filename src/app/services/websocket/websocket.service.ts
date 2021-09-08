import {Injectable} from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  ws: WebSocketSubject<any> = webSocket('wss://ws.goembargo.com/?symbol=BTC-USDT&exchanges=bitfinex',);

  constructor() {
  }

  getWsData() {
    this.ws.subscribe(
      msg => {
        if (msg.status === 200) {
          console.log('message received: ' + JSON.stringify(msg))
        }
      },
      // Called whenever there is a message from the server
      err => console.log(err),
      // Called if WebSocket API signals some kind of error
      () => console.log('complete')
      // Called when connection is closed (for whatever reason)
    )
  }

}
