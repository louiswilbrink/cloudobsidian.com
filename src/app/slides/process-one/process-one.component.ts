import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'co-process-one',
  templateUrl: './process-one.component.html',
  styleUrls: ['./process-one.component.scss'],
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
export class ProcessOneComponent implements OnInit {
  lottieConfig: {
    path: string;
    renderer: string;
    autoplay: boolean;
    loop: boolean;
  }

  constructor() { }

  ngOnInit() {
    this.lottieConfig = {
      path: 'assets/design-sprint.json',
      renderer: 'svg',
      autoplay: true,
      loop: true
    };
  }

}
