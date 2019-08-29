import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

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
        animate('200ms ease-out')
      ),
    ])
  ]
})
export class AboutUsOneComponent implements OnInit {
  @Input() scrollPosition: number;
  @Input() slide: {
    start: number;
    end: number;
  }

  lottieConfig: {
    path: string;
    renderer: string;
    autoplay: boolean;
    loop: boolean;
  }

  constructor() {
    this.lottieConfig = {
      path: 'assets/coders-and-designers.json',
      renderer: 'svg',
      autoplay: true,
      loop: true
    };
  }

  ngOnInit() {
  }
}
