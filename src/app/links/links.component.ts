import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'co-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  homeMoveScript: number[];
  homeFadeScript: number[];

  fadeDuration: number;

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

  buildHomeScript(fadeInDuration, fadeOutDuration): any {
    // Initialize full script for the home active decorator.
    this.homeMoveScript = [...Array(this.totalScrollPositions)].map(() => 0);
    this.homeFadeScript = [...Array(this.totalScrollPositions)].map(() => 0);

    // preScene => display => fadeOut
    let preSceneDuration = 0 - fadeInDuration;
    let sceneDuration = Math.floor(this.totalScrollPositions * 0.1); // 1 out of 10 scenes.
    let displayDuration = sceneDuration - fadeOutDuration;

    // Set the y-axis tranlate value from 0 to 30.
    let displayMoveScript = [...Array(displayDuration)].map(() => 0);
    let fadeOutMoveScript = [...Array(this.fadeDuration)].map((_, t) => this.easeInQuad(null, t, 0, 30, fadeInDuration)); 

    // Set the opacity from 1 to 0.
    let startFadeScript = [...Array(displayDuration)].map(() => 1);
    let fadeOutFadeScript = [...Array(this.fadeDuration)].map((_, t) => 1 - this.easeInQuad(null, t, 0, 1, fadeOutDuration)); 
    // Splice start, action & end scenes into the full script.
    this.homeMoveScript.splice(
      preSceneDuration, 
      displayDuration, 
      ...displayMoveScript);
    this.homeMoveScript.splice(
      displayDuration, 
      fadeOutDuration, 
      ...fadeOutMoveScript);

    this.homeFadeScript.splice(
      0, 
      displayDuration, 
      ...startFadeScript);
    this.homeFadeScript.splice(
      displayDuration, 
      fadeOutDuration, 
      ...fadeOutFadeScript);
  }

  buildAboutUsScript(fadeInDuration, fadeOutDuration): any {
    // Initialize full script for the home active decorator.
    this.aboutUsMoveScript = [...Array(this.totalScrollPositions)].map(() => 30);
    this.aboutUsFadeScript = [...Array(this.totalScrollPositions)].map(() => 0);

    // preSceneDuration should factor in fadeDuration.
    let preSceneDuration = (Math.floor(this.totalScrollPositions * 0.1)) - fadeInDuration;
    let sceneDuration = Math.floor(this.totalScrollPositions * 0.3);
    let displayDuration = sceneDuration - fadeOutDuration;

    // Set the y-axis tranlate value from 0 to 30.
    let fadeInMoveScript = [...Array(this.fadeDuration)].map((_, t) => 30 - this.easeInQuad(null, t, 0, 30, fadeInDuration)); 
    let displayMoveScript = [...Array(displayDuration)].map(() => 0);
    let fadeOutMoveScript = [...Array(this.fadeDuration)].map((_, t) => this.easeInQuad(null, t, 0, 30, fadeOutDuration)); 

    // Set the opacity from 1 to 0.
    let fadeInFadeScript = [...Array(this.fadeDuration)].map((_, t) => this.easeInQuad(null, t, 0, 1, fadeInDuration)); 
    let displayFadeScript = [...Array(displayDuration)].map(() => 1);
    let fadeOutFadeScript = [...Array(this.fadeDuration)].map((_, t) => 1 - this.easeInQuad(null, t, 0, 1, fadeOutDuration));

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
    this.fadeDuration = 120;
    this.buildHomeScript(0, 120);
    this.buildAboutUsScript(120, 120);
  }
}
