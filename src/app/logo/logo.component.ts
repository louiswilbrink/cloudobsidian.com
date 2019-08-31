import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { ScrollService } from '../scroll.service';

@Component({
  selector: 'co-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
	animations: [
    trigger('fadeInOut', [
      state(
        'fadeIn', 
        style({ opacity: '1' })
      ),
      state(
        'fadeOut', 
        style({ opacity: '0' })
      ),
      transition(
        'void => fadeIn, fadeIn => fadeOut, fadeOut => fadeIn', 
        animate('200ms ease-out')
      ),
    ])
  ]
})
export class LogoComponent implements OnInit {
  @Input() start: number;

  scrollTop: number;

  constructor(private scrollService: ScrollService) {
    this.scrollTop = 0;
  }

  ngOnInit() {
    this.scrollService.getScrollTop().subscribe((scrollTop) => {
      this.scrollTop = scrollTop;
    });
  }
}
