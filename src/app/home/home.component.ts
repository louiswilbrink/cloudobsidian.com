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
    const screenHeight = this.windowRef.innerHeight;
    const screenDelta = Math.floor(screenHeight / 3);

    this.slides = [...Array(slideTotal)].map((x, i) => {
      return {
        start: (screenHeight * i) - screenDelta,
        end: (screenHeight * (i + 1)) -screenDelta 
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
