import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { ScrollService } from '../../scroll.service';

@Component({
  selector: 'co-services-one',
  templateUrl: './services-one.component.html',
  styleUrls: ['./services-one.component.scss'],
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
export class ServicesOneComponent implements OnInit {
  @Input() slide: {
    start: number;
    end: number;
  }

  scrollTop: number;

  constructor(private scrollService: ScrollService) { }

  ngOnInit() {
    this.scrollTop = 0;
  }

}
