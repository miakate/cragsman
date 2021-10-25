import {Injectable} from '@angular/core';
import {webSocket} from 'rxjs/webSocket';
import {environment as env} from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private subject;
  public msg;

  constructor() {
  }

  connect(currency) {
    const wbUrl = env.wsUrl + currency + env.exUrl;
    this.subject = webSocket(wbUrl)
    this.subject.subscribe(
      (msg: any) => {
        this.msg = msg;
      }, // Called whenever there is a message from the server.
      err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      () => console.log('complete') // Called when connection is closed (for whatever reason).
    );
  }

  disconnect() {
    // console.log('DISCONNECTED:');
    console.log(this.subject);
    if (this.subject !== undefined && this.subject) {
      this.subject.unsubscribe();
      // console.log('ENTER IF DISCONNECTED')
    }
    return
  }

}
