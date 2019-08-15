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

  buildHomeScript(): any {
    // Initialize full script for the home active decorator.
    this.homeMoveScript = [...Array(this.totalScrollPositions)].map(() => 0);
    this.homeFadeScript = [...Array(this.totalScrollPositions)].map(() => 0);

    let preSceneDuration = 0;
    let sceneDuration = Math.floor(this.totalScrollPositions * 0.1); // 1 out of 10 scenes.

    // display, fadeOut
    //   0px      30px 
    //   75%      25%   (of sceneDuration)
    let displayDuration = Math.floor(sceneDuration * 0.75);

    // Set the y-axis tranlate value from 0 to 30.
    let displayMoveScript = [...Array(displayDuration)].map(() => 0);
    let fadeOutMoveScript = [...Array(this.fadeDuration)].map((_, t) => this.easeInQuad(null, t, 0, 30, this.fadeDuration)); 

    // Set the opacity from 1 to 0.
    let startFadeScript = [...Array(displayDuration)].map(() => 1);
    let fadeOutFadeScript = [...Array(this.fadeDuration)].map((_, t) => 1 - this.easeInQuad(null, t, 0, 1, this.fadeDuration)); 
    // Splice start, action & end scenes into the full script.
    this.homeMoveScript.splice(
      preSceneDuration, 
      displayDuration, 
      ...displayMoveScript);
    this.homeMoveScript.splice(
      displayDuration, 
      this.fadeDuration, 
      ...fadeOutMoveScript);

    this.homeFadeScript.splice(
      0, 
      displayDuration, 
      ...startFadeScript);
    this.homeFadeScript.splice(
      displayDuration, 
      this.fadeDuration, 
      ...fadeOutFadeScript);
  }

  buildAboutUsScript(): any {
    // Initialize full script for the home active decorator.
    this.aboutUsMoveScript = [...Array(this.totalScrollPositions)].map(() => 30);
    this.aboutUsFadeScript = [...Array(this.totalScrollPositions)].map(() => 0);

    // Start last 25% of page 1 (10%).
    let preSceneDuration = Math.floor(this.totalScrollPositions * 0.075);
    let sceneDuration = Math.floor(this.totalScrollPositions * 0.3); // 3 out of 10 scenes.

    // fadeIn, display, fadeOut
    //  30px     0px      30px 
    //   5%      90%       5%   (of sceneDuration)
    let displayDuration = Math.floor(sceneDuration * 0.6); 

    // Set the y-axis tranlate value from 0 to 30.
    let fadeInMoveScript = [...Array(this.fadeDuration)].map((_, t) => 30 - this.easeInQuad(null, t, 0, 30, this.fadeDuration)); 
    let displayMoveScript = [...Array(displayDuration)].map(() => 0);
    let fadeOutMoveScript = [...Array(this.fadeDuration)].map((_, t) => this.easeInQuad(null, t, 0, 30, this.fadeDuration)); 

    // Set the opacity from 1 to 0.
    let fadeInFadeScript = [...Array(this.fadeDuration)].map((_, t) => this.easeInQuad(null, t, 0, 1, this.fadeDuration)); 
    let displayFadeScript = [...Array(displayDuration)].map(() => 1);
    let fadeOutFadeScript = [...Array(this.fadeDuration)].map((_, t) => 1 - this.easeInQuad(null, t, 0, 1, this.fadeDuration));

    this.aboutUsMoveScript.splice(
      preSceneDuration, 
      this.fadeDuration, 
      ...fadeInMoveScript);
    this.aboutUsMoveScript.splice(
      preSceneDuration + this.fadeDuration, 
      displayDuration, 
      ...displayMoveScript);
    this.aboutUsMoveScript.splice(
      preSceneDuration + this.fadeDuration + displayDuration, 
      this.fadeDuration, 
      ...fadeOutMoveScript);

    this.aboutUsFadeScript.splice(
      preSceneDuration, 
      this.fadeDuration, 
      ...fadeInFadeScript);
    this.aboutUsFadeScript.splice(
      preSceneDuration + this.fadeDuration, 
      displayDuration, 
      ...displayFadeScript);
    this.aboutUsFadeScript.splice(
      preSceneDuration + this.fadeDuration + displayDuration, 
      this.fadeDuration, 
      ...fadeOutFadeScript);
  }

  ngOnInit() {
    this.fadeDuration = 120;
    this.buildHomeScript();
    this.buildAboutUsScript();
  }
}
