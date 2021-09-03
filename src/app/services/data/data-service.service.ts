import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) {
  }

  getMarketData() {
    return this.http.get(env.apiUrl);
    // return this.http.get(env.apiUrl + '/currencies/ticker?' + 'key=' + env.nomicsKey + '&ids=' + env.currencies + 'interval=1d,30d&convert=USD&per-page=100&page=1')
  }

}
