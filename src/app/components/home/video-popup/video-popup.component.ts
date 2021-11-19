import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-video-popup',
  templateUrl: './video-popup.component.html',
  styleUrls: ['./video-popup.component.scss']
})
export class VideoPopupComponent implements OnInit {
  @Input() public modalInfo;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
    console.log('video')

  }

  closeModal(): void {
    this.activeModal.close('Vlose Click');
  }

  // @Input() public modalInfo;
  // // safeURL: any;
  //
  // constructor(
  //   private sanitizer: DomSanitizer,
  //   public activeModal: NgbActiveModal,
  // ) {
  //   // this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.modalInfo);
  // }
  //
  // ngOnInit(): void {
  //   // const tag = document.createElement('script');
  //   // tag.src = 'https://www.youtube.com/iframe_api';
  //   // document.body.appendChild(tag);
  // }
}
