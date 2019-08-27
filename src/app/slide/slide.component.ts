import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'co-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
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
export class SlideComponent implements OnInit {
  @Input() scrollPosition: number;
  @Input() key: number;
  @Input() slide: {
    start: number;
    end: number;
    content: {
      title: string;
      text: string;
      buttonText: string;
    }
  }

  constructor() { }

  ngOnInit() {
  }
}
