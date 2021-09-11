import {ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {WebsocketService} from "../../services/websocket/websocket.service";
import {ExchangesService} from "../../services/exchanges/exchanges.service";
import {CurrencyService} from "../../services/currency/currency.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public currency: any;
  public exchanges: any;

  constructor(public ws: WebsocketService, public es: ExchangesService, public cs: CurrencyService) {

  }

  ngOnInit() {
    this.cs.getCurrency().subscribe(data => {
      this.currency = data
    })
    this.es.getExchanges().subscribe(data => {
      this.exchanges = data
    })

  }

  changeCurrency(e) {
    this.ws.getWsData(e.target.value);
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }


}
