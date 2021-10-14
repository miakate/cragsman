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

  getGlobalVoulme() {
    this.http.get(environment.apiUrl).subscribe(data => {
      console.log(data);
      this.volume = data
    })
  }

}
