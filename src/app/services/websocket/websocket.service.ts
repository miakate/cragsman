import {Injectable} from '@angular/core';
import {BehaviorSubject, interval} from "rxjs";
import {first} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public connected$ = new BehaviorSubject<boolean>(false);
  public connState: boolean;

  constructor(private http: HttpClient) {
  }

  getWsData() {
    // // URL connection
    // const accountAndOrderAndTransfers = new WebSocket("wss://testnet-dex.binance.org/api/ws/tbnb1qtuf578qs9wfl0wh3vs0r5nszf80gvxd28hkrc");
    //
    // // Or Subscribe method
    // const conn = new WebSocket("wss://testnet-dex.binance.org/api/ws");
    // conn.onopen = function (evt) {
    //   conn.send(JSON.stringify({
    //     method: "subscribe",
    //     topic: "accounts",
    //     address: "tbnb1qtuf578qs9wfl0wh3vs0r5nszf80gvxd28hkrc"
    //   }));
    // }
  }


  connected(data: boolean) {
    this.connState = data;
    this.connected$.next(this.connState);
  }

}
