import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { ScrollService } from '../../scroll.service';

@Component({
  selector: 'co-about-us-one',
  templateUrl: './about-us-one.component.html',
  styleUrls: ['./about-us-one.component.scss'],
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
        animate('200ms 200ms ease-out')
      ),
    ])
  ]
})
export class AboutUsOneComponent implements OnInit {
  @Input() slide: {
    start: number;
    end: number;
  }

  scrollTop: number;

  lottieConfig: {
    path: string;
    renderer: string;
    autoplay: boolean;
    loop: boolean;
  }

  constructor(private scrollService: ScrollService) { }

  ngOnInit() {
    this.scrollTop = 0;

    this.scrollService.getScrollTop().subscribe((scrollTop) => {
      this.scrollTop = scrollTop;
    });

    this.lottieConfig = {
      path: 'assets/coders-and-designers.json',
      renderer: 'svg',
      autoplay: true,
      loop: true
    };
  }
}
