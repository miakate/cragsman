import {Component, OnInit} from '@angular/core';
import {FormattingService} from "../../core/services/formatting/formatting.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
  }


  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
