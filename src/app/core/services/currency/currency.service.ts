import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Currency} from '../../interfaces/exchanges.interface';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private currency = new BehaviorSubject<Currency[]>([
    { name: 'BTC-USDT' },
    { name: 'DASH-USDT' },
    { name: 'DOGE-BTC' },
    { name: 'DOGE-USDT' },
    { name: 'ETH-BTC' },
    { name: 'ETH-USDT' },
    { name: 'LTC-BTC' },
    { name: 'LTC-USDT' },
    { name: 'XLM-BTC' },
    { name: 'XRP-ETH' },
    { name: 'XRP-BTC' },
    { name: 'XRP-USDT' }
  ]);

  private currency$ = this.currency.asObservable();

  constructor() {
  }

  getCurrency(): Observable<Currency[]> {
    return this.currency$;
  }


}
