import { Component, OnInit } from '@angular/core';

import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'co-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    anime.set('.st0', {
      translateX: '-50px',
      scale: 1,
      rotate: '-45deg'
    });
    
    anime({
      targets: '.st0',
      scale: 25.5,
      translateX: '-950px',
      easing: 'easeOutQuad',
      duration: 800
    }); 
  }
}
