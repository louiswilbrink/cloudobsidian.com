import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

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
export class ServicesThreeComponent implements OnInit, AfterViewInit {
  options: AnimationOptions = {
    path: 'assets/services-and-integration.json'
  };

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  configReady(): void {
  }

  domLoaded(): void {
  }
}
