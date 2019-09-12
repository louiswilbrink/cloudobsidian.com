import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'co-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
  providers: [{ 
    provide: Window, 
    useValue: window 
  }],
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

  constructor(
    private window: Window,
    route: ActivatedRoute
  ) { }

  ngOnInit() {
  }
}
