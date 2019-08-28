import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

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
        animate('200ms ease-out')
      ),
    ])
  ]
})
export class AboutUsTwoComponent implements OnInit {
  @Input() scrollPosition: number;
  @Input() slide: {
    start: number;
    end: number;
  }

  constructor() { }

  ngOnInit() {
  }

}
