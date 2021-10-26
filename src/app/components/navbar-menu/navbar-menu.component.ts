import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss']
})
export class NavbarMenuComponent implements OnInit {
  scrolled: boolean;

  constructor() {
  }

  ngOnInit() {
    window.addEventListener("scroll", this.scroll, true);
  }

  scroll = () => {
    const scrollPos = document.documentElement.scrollTop;
    this.scrolled = scrollPos <= 80;
  };

  signin() {
    window.location.href = "https://trade.cragsmantech.com/sessions/signin";
  }

  signup() {
    window.location.href = "https://trade.cragsmantech.com/sessions/signup";
  }
}
