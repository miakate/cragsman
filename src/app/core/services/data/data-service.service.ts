import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment.prod";


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  public volume: any;

  constructor(private http: HttpClient) {
  }

  getGlobalVolume() {
   return this.http.get(environment.apiUrl)
  }

}
