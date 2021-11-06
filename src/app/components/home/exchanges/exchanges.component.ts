import {Component, OnInit} from '@angular/core';
import {WebsocketService} from "../../../core/services/websocket/websocket.service";
import {ExchangesService} from "../../../core/services/exchanges/exchanges.service";
import {CurrencyService} from "../../../core/services/currency/currency.service";
import {Currency, Exchange} from "../../../core/interfaces/exchanges.interface";

@Component({
  selector: 'app-exchanges',
  templateUrl: './exchanges.component.html',
  styleUrls: ['./exchanges.component.scss']
})
export class ExchangesComponent implements OnInit {
  public currency: Currency[];
  public exchanges: Exchange[];

  constructor(
    public ws: WebsocketService,
    public es: ExchangesService,
    public cs: CurrencyService,
  ) {
  }

  ngOnInit(): void {
    this.cs.getCurrency().subscribe(data => {
      this.currency = data
    })
    this.es.getExchanges().subscribe(data => {
      this.exchanges = data;
    })
  }

  changeCurrency(e) {
    this.ws.disconnect();
    this.ws.connect(e.target.value);
  }

}
