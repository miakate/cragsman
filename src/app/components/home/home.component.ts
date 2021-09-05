import {ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {DataServiceService} from "../../services/data/data-service.service";
import {WebsocketService} from "../../services/websocket/websocket.service";
import {MdbTableDirective, MdbTablePaginationComponent} from "angular-bootstrap-md";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(MdbTablePaginationComponent, {static: true}) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, {static: true}) mdbTable: MdbTableDirective
  elements: any = [];
  previous: any = [];
  headElements = ['ID', 'First', 'Last', 'Handle'];

  constructor(private cdRef: ChangeDetectorRef, private ds: DataServiceService, public ws: WebsocketService,) {
  }

  ngOnInit() {
    for (let i = 1; i <= 15; i++) {
      this.elements.push({id: i.toString(), first: 'User ' + i, last: 'Name ' + i, handle: 'Handle ' + i});
    }
    this.ws.getWsData();
    this.mdbTable.setDataSource(this.elements);
    this.elements = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(10);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  // constructor(

  // ) {
  // }
  //
  // ngOnInit(): void {
  //   this.ws.getWsData();
  //   // console.log(this.ws.data)
  // }
  //
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  numberWithCommas(x) {
    let parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(".");
  }

}
