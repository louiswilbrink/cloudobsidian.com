import { Component, OnInit } from '@angular/core';

import { WindowRefService } from '../window-ref.service';

@Component({
  selector: 'co-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slides: {
    start: number,
    end: number
  }[];
  
  windowRef: any;
  isMobile: boolean;

  constructor(windowRefService: WindowRefService) {
    this.windowRef = windowRefService.nativeWindow;
  }

  configSlides() {
    const slideTotal = 10;
    const windowRef = this.windowRef;

    // For 10 slides with window height 100px:
    // start slides at scroll position [0, 100, 200, ..],
    // end slides at scroll position [70, 170, 270, ..]
    this.slides = [...Array(slideTotal)].map((x, i) => {
      return {
        start: windowRef.innerHeight * i,
        end: windowRef.innerHeight * (i + 1)
      };
    });
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
    this.configSlides();
  }
}
