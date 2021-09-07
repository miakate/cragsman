import {ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {DataServiceService} from "../../services/data/data-service.service";
import {WebsocketService} from "../../services/websocket/websocket.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public selected: any;
  public exchangeData: any;

  constructor(private cdRef: ChangeDetectorRef, private ds: DataServiceService, public ws: WebsocketService,) {
  }

  ngOnInit() {
    this.ds.getExchangeData().subscribe((data: any) => {
      this.exchangeData = data;
      console.log(this.exchangeData)
    })
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  numberWithCommas(x) {
    let parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(".");
  }

  nFormatter(num) {
    const lookup = [
      {value: 1, symbol: ""},
      {value: 1e3, symbol: "k"},
      {value: 1e6, symbol: "M"},
      {value: 1e9, symbol: "B"},
      {value: 1e12, symbol: "T"},
      {value: 1e15, symbol: "P"},
      {value: 1e18, symbol: "E"}
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function (item) {
      return num >= item.value;
    });
    return item ? (num / item.value).toFixed(1).replace(rx, "$1") + item.symbol : "0";
  }

}
