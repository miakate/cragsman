import {ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {WebsocketService} from "../../services/websocket/websocket.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public exchangeData: any;
  websiteList: any = [
    'BTC-USDT',
    'DASH-USDT',
    'DOGE-BTC',
    'DOGE-USDT',
    'ETH-BTC',
    'ETH-USDT',
    'LTC-BTC',
    'LTC-USDT',
    'XLM-BTC',
    'XRP-ETH',
    'XRP-BTC',
    'XRP-USDT',
  ];

  constructor(public ws: WebsocketService) {
  }

  ngOnInit() {
  }


  changeWebsite(e) {
    this.ws.getWsData(e.target.value);
  }


  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  // numberWithCommas(x) {
  //   let parts = x.toString().split(".");
  //   parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  //   return parts.join(".");
  // }
  //
  // nFormatter(num) {
  //   const lookup = [
  //     {value: 1, symbol: ""},
  //     {value: 1e3, symbol: "k"},
  //     {value: 1e6, symbol: "M"},
  //     {value: 1e9, symbol: "B"},
  //     {value: 1e12, symbol: "T"},
  //     {value: 1e15, symbol: "P"},
  //     {value: 1e18, symbol: "E"}
  //   ];
  //   const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  //   var item = lookup.slice().reverse().find(function (item) {
  //     return num >= item.value;
  //   });
  //   return item ? (num / item.value).toFixed(1).replace(rx, "$1") + item.symbol : "0";
  // }

}
