import { Component, OnInit } from '@angular/core';

import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'co-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public target: string;
  public isOpen: boolean;

  constructor() { }

  ngOnInit() {
    this.target = '.top';
    this.isOpen = false;

    anime.set(this.target, {
      translateX: '-100px',
      translateY: '50px',
      scale: 1,
      rotate: '-45deg'
    });
  }

  toggleMenu(isOpen) {
    if (isOpen) {
      anime({
        targets: this.target,
        scale: 12,
        translateX: '-950px',
        easing: 'easeOutQuad',
        duration: 300
      }); 
    } else {
      anime({
        targets: this.target,
        scale: 1,
        translateX: '-100px',
        easing: 'easeOutQuad',
        duration: 300
      }); 
    }

    this.isOpen = isOpen;
  }
}
