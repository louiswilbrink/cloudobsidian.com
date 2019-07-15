import { Component, OnInit } from '@angular/core';

import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'co-line-drawing',
  templateUrl: './line-drawing.component.html',
  styleUrls: ['./line-drawing.component.scss']
})
export class LineDrawingComponent implements OnInit {
  public targets: string;

  constructor() { }

  ngOnInit() {
    this.targets = '.line-drawing-demo .lines path';

    anime({
      targets: this.targets,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 2500,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: true
    });
  }

}
