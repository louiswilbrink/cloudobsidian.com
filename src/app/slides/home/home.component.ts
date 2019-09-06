import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'co-home-slide',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
