import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { WindowRefService } from '../window-ref.service';

@Component({
  selector: 'co-mobile-logo',
  templateUrl: './mobile-logo.component.html',
  styleUrls: ['./mobile-logo.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state(
        'fadeIn', 
        style({ opacity: 1 })
      ),
      state(
        'fadeOut', 
        style({ opacity: 0 })
      ),
      transition(
        'void => fadeIn, fadeIn => fadeOut, fadeOut => fadeIn', 
        animate('200ms ease-out')
      ),
    ])
  ]
})
export class MobileLogoComponent implements OnInit {
  @Input() start: number;
  windowRef: any;

  constructor(windowRefService: WindowRefService) {
    this.windowRef = windowRefService.nativeWindow;
  }

  ngOnInit() {
    this.start = typeof this.start !== 'undefined' ? this.start : Math.floor(this.windowRef.innerHeight / 2);
  }
}
