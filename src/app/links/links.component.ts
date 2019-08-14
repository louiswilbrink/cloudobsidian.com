import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'co-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  homeScript: number[];

  @Input() scrollPosition: number;
  @Input() totalScrollPositions: number;

  constructor() {
  }

  // https://joshondesign.com/2013/03/01/improvedEasingEquations
  // https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
  easeInQuad(x, t, b, c, d) {
		return c*(t/=d)*t + b;
  }

  buildHomeScript(): any {
    // Initialize full script for the home active decorator.
    this.homeScript = [...Array(this.totalScrollPositions)].map(() => 0);

    // start, action, end
    let sceneLength = Math.floor(this.totalScrollPositions * 0.1); // 1 out of 10 scenes.
    let startLength = Math.floor(sceneLength * 0.4); // First 40%, maintain position.
    let actionLength = Math.floor(sceneLength * 0.4); // Second 40%, perform movement.
    let endLength = Math.floor(sceneLength * 0.2); // Second 40%, perform movement.

    let startScript = [...Array(startLength)].map(() => 0);
    let actionScript = [...Array(actionLength)].map((_, t) => this.easeInQuad(null, t, 0, 30, actionLength)); 
    console.log('actionScript', actionScript);
    let endScript = [...Array(endLength)].map(() => 30);

    this.homeScript.splice(0, startLength, ...startScript);
    this.homeScript.splice(startLength, startLength + actionLength, ...actionScript);
    this.homeScript.splice(startLength + actionLength, startLength + actionLength + endLength, ...endScript);
  }

  ngOnInit() {
    this.buildHomeScript();
  }
}
