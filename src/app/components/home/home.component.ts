import {Component, OnInit} from '@angular/core';
import {DataServiceService} from "../../core/services/data/data-service.service";
import {WebsocketService} from "../../core/services/websocket/websocket.service";
import {ExchangesService} from "../../core/services/exchanges/exchanges.service";
import {CurrencyService} from "../../core/services/currency/currency.service";
import {Currency, Exchange} from 'src/app/core/interfaces/exchanges.interface';
import {FormattingService} from "../../core/services/formatting/formatting.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public currency: Currency[];
  public exchanges: Exchange[];
  public firstExchangesList: Exchange[];
  public secondExchangesList: Exchange[];
  public exchangesLists: Exchange[][] = [];

  constructor(public ws: WebsocketService,
              public es: ExchangesService,
              public cs: CurrencyService,
              public ds: DataServiceService,
              public fs: FormattingService) {
  }

  ngOnInit() {
    this.cs.getCurrency().subscribe(data => {
      this.currency = data
    })
    this.es.getExchanges().subscribe(data => {
      this.exchanges = data;
      this.firstExchangesList = this.exchanges.slice(0, 4);
      this.secondExchangesList = this.exchanges.slice(4);
      this.exchangesLists.push(this.firstExchangesList);
      this.exchangesLists.push(this.secondExchangesList);
    })
    this.ds.getGlobalVolume();
  }

  changeCurrency(e) {
    this.ws.disconnect();
    this.ws.connect(e.target.value);
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
