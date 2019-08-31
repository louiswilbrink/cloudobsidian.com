import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { ScrollService } from '../../scroll.service';

@Component({
  selector: 'co-home-slide',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
export class HomeComponent implements OnInit {
  @Input() slide: {
    start: number;
    end: number;
  }

  scrollTop: number;

  constructor(private scrollService: ScrollService) { }

  ngOnInit() {
    this.scrollTop = 0;

    this.scrollService.getScrollTop().subscribe((scrollTop) => {
      this.scrollTop = scrollTop;
    });
  }
}
