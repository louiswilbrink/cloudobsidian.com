import { Component, OnInit } from '@angular/core';

import { WindowRefService } from '../window-ref.service';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {
  windowRef: any;
  isMobile: boolean;

  constructor(windowRefService: WindowRefService) {
    this.windowRef = windowRefService.nativeWindow;
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
