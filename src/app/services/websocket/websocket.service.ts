import {Injectable} from '@angular/core';
import {webSocket} from "rxjs/webSocket";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket$ = webSocket(environment.apiUrl);
  public messages$ = this.socket$.asObservable();

  public sendMessage(msg: any) {
    this.socket$.next(msg);
  }
}
