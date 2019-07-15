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
  }

  toggleMenu(isOpen) {
    console.log('toggleMenu');
    anime({
      targets: this.target,
      easing: 'easeOutQuad',
      duration: 300,
      points: [{ 
        value: '0,0 150,0 0,150',
      }, { 
        value: '0,0 375,0 0,375' 
      }],
    }); 
  }
}
