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
          transform: 'translateY(0px)'
        })
      ),
      state(
        'slideDown',
        style({
          opacity: 0,
          transform: 'translateY(200px)'
        })
      ),
      transition(
        'void => slideUp, slideUp => slideDown, slideDown => slideUp',
        animate('300ms ease-out')
      )
    ])
  ]
})
export class AboutUsTwoComponent implements OnInit {
  isFullListDisplayed: boolean;
  buttonText: string;

  lottieConfig: {
    path: string;
    renderer: string;
    autoplay: boolean;
    loop: boolean;
  }

  constructor() { }

  ngOnInit() {
    this.isFullListDisplayed = false;
    this.buttonText = 'See more projects';

    this.lottieConfig = {
      path: 'assets/maps-and-charts.json',
      renderer: 'svg',
      autoplay: true,
      loop: true
    };
  }

  showFullList() {
    this.isFullListDisplayed = !this.isFullListDisplayed;
    this.buttonText = this.isFullListDisplayed ? 'Back' : 'See more projects';
  }
}
