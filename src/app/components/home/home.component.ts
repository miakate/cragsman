import {Component, OnInit} from '@angular/core';
import {DataServiceService} from "../../services/data/data-service.service";
import {WebsocketService} from "../../services/websocket/websocket.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public marketData: any;

  constructor(
    private ds: DataServiceService,
    private ws: WebsocketService,
  ) {
  }

  ngOnInit(): void {
    this.ds.getMarketData().subscribe((data: any) => {
      this.marketData = data
      console.log(this.marketData)
    });
    this.ds.getData().subscribe((data: any) => {
      console.log(data)
    });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  numberWithCommas(x) {
    let parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(".");
  }

}
