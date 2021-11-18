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
      },
      err => console.log(err),
      () => console.log('complete')
    )
    ;
  }

  disconnect() {
    if (this.subject !== undefined && this.subject) {
      this.subject.unsubscribe();
    }
    return
  }

}
