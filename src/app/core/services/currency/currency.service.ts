import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private currency = new BehaviorSubject<any[]>([
    'BTC-USDT',
    'DASH-USDT',
    'DOGE-BTC',
    'DOGE-USDT',
    'ETH-BTC',
    'ETH-USDT',
    'LTC-BTC',
    'LTC-USDT',
    'XLM-BTC',
    'XRP-ETH',
    'XRP-BTC',
    'XRP-USDT',
  ]);

  private currency$ = this.currency.asObservable();

  constructor() {
  }

  getCurrency(): Observable<any[]> {
    return this.currency$;
  }


}
