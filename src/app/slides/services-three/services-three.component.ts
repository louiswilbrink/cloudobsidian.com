import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'co-services-three',
  templateUrl: './services-three.component.html',
  styleUrls: ['./services-three.component.scss'],
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
export class ServicesThreeComponent implements OnInit {
  lottieConfig: {
    path: string;
    renderer: string;
    autoplay: boolean;
    loop: boolean;
  }

  constructor() { }

  ngOnInit() {
    this.lottieConfig = {
      path: 'assets/services-and-integration.json',
      renderer: 'svg',
      autoplay: true,
      loop: true
    };
  }
}
