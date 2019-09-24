import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'co-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
	animations: [
    trigger('expandCollapse', [
      state(
        'expand', 
        style({ 
          transform: 'translateY(0vh)'
        })
      ),
      state(
        'collapse', 
        style({ 
          transform: 'translateY(-100vh)'
        })
      ),
      transition(
        'void => expand, expand => collapse, collapse => expand', 
        animate('500ms ease-in-out')
      ),
    ])
  ]
})
export class MenuComponent implements OnInit {
  public isOpen: boolean;

  constructor() { }

  ngOnInit() {
    this.isOpen = false;
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
