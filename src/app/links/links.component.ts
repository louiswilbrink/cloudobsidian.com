import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { ScrollService } from '../scroll.service';

@Component({
  selector: 'co-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
  animations: [
    trigger('linkActivation', [
      state(
        'activate', 
        style({ 
          opacity: 1,
          transform: 'translateY(0px)'
        })
      ),
      state(
        'deactivate', 
        style({ 
          opacity: 0,
          transform: 'translateY(30px)'
        })
      ),
      transition(
        'void => activate, activate => deactivate, deactivate => activate', 
        animate('200ms ease-out')
      ),
    ])
  ]
})
export class LinksComponent implements OnInit {
  @Input() slides: {
    start: number,
    end: number
  }[];

  scrollTop: number;

  constructor(private scrollService: ScrollService) { }

  ngOnInit() {
    this.scrollTop = 0;

    this.scrollService.getScrollTop().subscribe((scrollTop) => {
      this.scrollTop = scrollTop;
    });
  }
}
