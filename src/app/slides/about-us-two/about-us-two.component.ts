import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { ScrollService } from '../../scroll.service';

@Component({
  selector: 'co-about-us-two',
  templateUrl: './about-us-two.component.html',
  styleUrls: ['./about-us-two.component.scss'],
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
export class AboutUsTwoComponent implements OnInit {
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

    this.lottieConfig = {
      path: 'assets/maps-and-charts.json',
      renderer: 'svg',
      autoplay: true,
      loop: true
    };
  }
}
