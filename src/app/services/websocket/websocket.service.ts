import {Injectable} from '@angular/core';
import {BehaviorSubject, interval} from "rxjs";
import {first} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public connected$ = new BehaviorSubject<boolean>(false);
  public data: any;
  private config = 'https://api.lunarcrush.com/v2/assets?data=market&type=fast&key=rlxr6sz0zhi58jnrs19ji5';
  public connState: boolean;
  private source = interval(6000);

  constructor(private http: HttpClient) {
  }

  getWsData() {
    this.source.subscribe(() => {
      this.http.get(this.config, {observe: 'response'})
        .pipe(first())
        .subscribe((resp: any) => {
          if (resp.status === 200) {
            this.connected(true);
            // resp => this.data = resp.body.data.slice(0, 4);
            this.data = resp.body.data;
            console.log(this.data)
            return this.data;
          } else {
            this.connected(false);
          }
        })
    });
  }

  connected(data: boolean) {
    this.connState = data;
    this.connected$.next(this.connState);
  }

}
