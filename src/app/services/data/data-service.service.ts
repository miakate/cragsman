import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) {
  }
  //
  // getMarketData() {
  //   return this.http.get(env.apiUrl);
  // }
  //
  // getExchangeData() {
  //   return this.http.get(env.exchangeUrl);
  // }
  //
  // getData() {
  //   return this.http.get(env.url);
  //
  // }

}
