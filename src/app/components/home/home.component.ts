import {Component, OnInit} from '@angular/core';
import {VideoPopupComponent} from "./video-popup/video-popup.component";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  videoUrl = 'O1z4HsLbkrs';

  constructor(
    private modalService: NgbModal,
  ) {
  }

  ngOnInit() {
  }


  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  openVideoPopup(): void {
    const modalRef = this.modalService.open(VideoPopupComponent,);
    // modalRef.componentInstance.modalInfo = message;
  }

  signup() {
    window.location.href = "https://trade.cragsmantech.com/sessions/signup";
  }

  // openVideoPopup(videoSource): void {
  //   const modalRef = this.modalService.open(VideoPopupComponent, {size: 'md'});
  //   modalRef.componentInstance.modalInfo = videoSource;
  // }

}
