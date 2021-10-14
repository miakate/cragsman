import {Component, OnInit} from '@angular/core';
import {DataServiceService} from "../../core/services/data/data-service.service";
import {WebsocketService} from "../../core/services/websocket/websocket.service";
import {ExchangesService} from "../../core/services/exchanges/exchanges.service";
import {CurrencyService} from "../../core/services/currency/currency.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public currency: any;
  public exchanges: any;
  public volume: any;

  constructor(public ws: WebsocketService,
              public es: ExchangesService,
              public cs: CurrencyService,
              public ds: DataServiceService) {
  }

  ngOnInit() {
    this.cs.getCurrency().subscribe(data => {
      this.currency = data
    })
    this.es.getExchanges().subscribe(data => {
      this.exchanges = data;
    })
    this.ds.getGlobalVoulme();
  }

  changeCurrency(e) {
    this.ws.connect(e.target.value);
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
