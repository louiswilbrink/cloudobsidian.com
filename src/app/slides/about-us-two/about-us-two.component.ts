import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'co-about-us-two',
  templateUrl: './about-us-two.component.html',
  styleUrls: ['./about-us-two.component.scss'],
	animations: [
    trigger('slideUpDown', [
      state(
        'slideUp',
        style({
          opacity: 1,
          transform: 'translateY(40px)'
        })
      ),
      state(
        'slideDown',
        style({
          opacity: 0,
          transform: 'translateY(80px)'
        })
      ),
      transition(
        'void => slideUp, slideUp => slideDown, slideDown => slideUp',
        animate('200ms ease-out')
      )
    ])
  ]
})
export class AboutUsTwoComponent implements OnInit {
  isFullListDisplayed: boolean;

  lottieConfig: {
    path: string;
    renderer: string;
    autoplay: boolean;
    loop: boolean;
  }

  constructor() { }

  ngOnInit() {
    this.isFullListDisplayed = false;

    this.lottieConfig = {
      path: 'assets/maps-and-charts.json',
      renderer: 'svg',
      autoplay: true,
      loop: true
    };
  }

  showFullList() {
    this.isFullListDisplayed = true;
  }
}
