import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'co-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  homeMoveScript: number[];
  homeFadeScript: number[];

  aboutUsMoveScript: number[];
  aboutUsFadeScript: number[];

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
    this.homeMoveScript = [...Array(this.totalScrollPositions)].map(() => 0);
    this.homeFadeScript = [...Array(this.totalScrollPositions)].map(() => 0);

    let sceneDuration = Math.floor(this.totalScrollPositions * 0.1); // 1 out of 10 scenes.

    // start, action, end scene durations.
    let startDuration = Math.floor(sceneDuration * 0.4); // First 40%, maintain position.
    let actionDuration = Math.floor(sceneDuration * 0.4); // Second 40%, perform movement.
    let endDuration = Math.floor(sceneDuration * 0.2); // Last 40%, maintain hidden position.

    // Set the y-axis tranlate value from 0 to 30.
    let startMoveScript = [...Array(startDuration)].map(() => 0);
    let actionMoveScript = [...Array(actionDuration)].map((_, t) => this.easeInQuad(null, t, 0, 30, actionDuration)); 
    let endMoveScript = [...Array(endDuration)].map(() => 30);

    // Set the opacity from 1 to 0.
    let startFadeScript = [...Array(startDuration)].map(() => 1);
    let actionFadeScript = [...Array(actionDuration)].map((_, t) => 1 - this.easeInQuad(null, t, 0, 1, actionDuration)); 
    let endFadeScript = [...Array(endDuration)].map(() => 0);

    // Splice start, action & end scenes into the full script.
    this.homeMoveScript.splice(
      0, 
      startDuration, 
      ...startMoveScript);
    this.homeMoveScript.splice(
      startDuration, 
      actionDuration, 
      ...actionMoveScript);
    this.homeMoveScript.splice(
      startDuration + actionDuration, 
      endDuration, 
      ...endMoveScript);

    this.homeFadeScript.splice(
      0, 
      startDuration, 
      ...startFadeScript);
    this.homeFadeScript.splice(
      startDuration, 
      actionDuration, 
      ...actionFadeScript);
    this.homeFadeScript.splice(
      startDuration + actionDuration, 
      endDuration, 
      ...endFadeScript);
  }

  buildAboutUsScript(): any {
    // Initialize full script for the home active decorator.
    this.aboutUsMoveScript = [...Array(this.totalScrollPositions)].map(() => 30);
    this.aboutUsFadeScript = [...Array(this.totalScrollPositions)].map(() => 0);

    let preSceneDuration = Math.floor(this.totalScrollPositions * 0.09);
    let sceneDuration = Math.floor(this.totalScrollPositions * 0.3); // 3 out of 10 scenes.

    // fadeIn, display, fadeOut
    //  30px     0px      30px 
    //   5%      90%       5%   (of sceneDuration)
    let fadeInDuration = Math.floor(sceneDuration * 0.05);
    let displayDuration = Math.floor(sceneDuration * 0.9); 
    let fadeOutDuration = Math.floor(sceneDuration * 0.05); 

    // Set the y-axis tranlate value from 0 to 30.
    let fadeInMoveScript = [...Array(fadeInDuration)].map((_, t) => 30 - this.easeInQuad(null, t, 0, 30, fadeInDuration)); 
    let displayMoveScript = [...Array(displayDuration)].map(() => 0);
    let fadeOutMoveScript = [...Array(fadeOutDuration)].map((_, t) => this.easeInQuad(null, t, 0, 30, fadeOutDuration)); 

    // Set the opacity from 1 to 0.
    let fadeInFadeScript = [...Array(fadeInDuration)].map((_, t) => this.easeInQuad(null, t, 0, 1, fadeInDuration)); 
    let displayFadeScript = [...Array(displayDuration)].map(() => 1);
    let fadeOutFadeScript = [...Array(fadeOutDuration)].map((_, t) => 1 - this.easeInQuad(null, t, 0, 1, fadeOutDuration));

    // Splice start, action & end scenes into the full script.
    this.aboutUsMoveScript.splice(
      preSceneDuration, 
      fadeInDuration, 
      ...fadeInMoveScript);
    this.aboutUsMoveScript.splice(
      preSceneDuration + fadeInDuration, 
      displayDuration, 
      ...displayMoveScript);
    this.aboutUsMoveScript.splice(
      preSceneDuration + fadeInDuration + displayDuration, 
      fadeOutDuration, 
      ...fadeOutMoveScript);

    this.aboutUsFadeScript.splice(
      preSceneDuration, 
      fadeInDuration, 
      ...fadeInFadeScript);
    this.aboutUsFadeScript.splice(
      preSceneDuration + fadeInDuration, 
      displayDuration, 
      ...displayFadeScript);
    this.aboutUsFadeScript.splice(
      preSceneDuration + fadeInDuration + displayDuration, 
      fadeOutDuration, 
      ...fadeOutFadeScript);
  }

  ngOnInit() {
    this.buildHomeScript();
    this.buildAboutUsScript();
  }
}
