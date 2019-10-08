import { Component, OnInit } from '@angular/core';

import { WindowRefService } from '../window-ref.service';

import lottie from 'lottie-web';

@Component({
  selector: 'app-services-and-pricing',
  templateUrl: './services-and-pricing.component.html',
  styleUrls: ['./services-and-pricing.component.scss']
})
export class ServicesAndPricingComponent implements OnInit {
  windowRef: any;
  isMobile: boolean;

  lottie: any;

  constructor(windowRefService: WindowRefService) {
    this.windowRef = windowRefService.nativeWindow;

    this.lottie = lottie;
    this.lottie.setLocationHref(document.location.href);
  }

  setMediaBehavior() {
    let matchMedia = this.windowRef.matchMedia('(max-width: 414px)');

    let setIsMobile = function (event) {
      this.isMobile = event.matches;
    }

    let setIsMobileBinded = setIsMobile.bind(this);

    this.isMobile = matchMedia.matches;

    matchMedia.addListener(setIsMobileBinded);
  }

  ngOnInit() {
    this.setMediaBehavior();
  }
}
