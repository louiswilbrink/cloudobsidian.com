import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'co-about-us-two',
  templateUrl: './about-us-two.component.html',
  styleUrls: ['./about-us-two.component.scss'],
	animations: [
    trigger('slideUpDown', [
      state(
        'slideUpMore',
        style({
          opacity: 1,
          transform: 'translateY(-200px)'
        })
      ),
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
        'void => slideUp, slideUp => slideDown, slideDown => slideUp, slideUp => slideUpMore, slideUpMore => void',
        animate('300ms ease-out')
      )
    ])
  ]
})
export class AboutUsTwoComponent implements OnInit {
  @Input() isMobile: boolean;
  index: number;
  state: {
    pageOne: boolean;
    pageTwo: boolean;
    pageTwoScrolled: boolean;
  }[];
  buttonText: string[];

  lottieConfig: {
    path: string;
    renderer: string;
    autoplay: boolean;
    loop: boolean;
  }

  constructor() { }

  ngOnInit() {
    this.index = 0;

    if (this.isMobile) {
      this.state = [
        { pageOne: true, pageTwo: false, pageTwoScrolled: false },
        { pageOne: false, pageTwo: true, pageTwoScrolled: false },
        { pageOne: false, pageTwo: false, pageTwoScrolled: true }
      ];

      this.buttonText = [
        'See more projects', 
        'More', 
        'Back'
      ];
    } else {
      this.state = [
        { pageOne: true, pageTwo: false, pageTwoScrolled: false },
        { pageOne: false, pageTwo: true, pageTwoScrolled: false },
      ];

      this.buttonText = [
        'See more projects', 
        'Back'
      ];
    }

    this.lottieConfig = {
      path: 'assets/maps-and-charts.json',
      renderer: 'svg',
      autoplay: true,
      loop: true
    };
  }

  transitionState() {
    if (this.index === (this.state.length - 1)) {
      this.index = 0;
    } else {
      this.index++;
    }
  }
}
