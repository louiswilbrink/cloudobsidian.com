import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'co-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slides: {
    start: number,
    end: number
  }[];
  slideTotal: number;
  slideStarts: number[];
  slideEnds: number[];
  scrollPosition: number;
  totalScrollPositions: number;

  constructor() {
    this.slideTotal = 10;
    this.slideStarts = [0];
    this.slideEnds = [0];
  }

  configScroll() {
    this.totalScrollPositions = (window.innerHeight * this.slideTotal) - window.innerHeight;

    // For 10 slides with window height 100px, start slides at scroll position [0, 100, 200, ..].
    this.slideStarts = [...Array(this.slideTotal)].map((x, i) => window.innerHeight * i);

    // For 10 slides with window height 100px, end slides at scroll position [90, 190, 290, ..].
    this.slideEnds = [...Array(this.slideTotal)].map((x, i) => (window.innerHeight * (i + 1)) - Math.floor(window.innerHeight * 0.1));

    this.slides = [...Array(this.slideTotal)].map((x, i) => {
      return {
        start: window.innerHeight * i,
        end: (window.innerHeight * (i + 1)) - Math.floor(window.innerHeight * 0.3)
      };
    });
  }

  ngOnInit() {
    this.scrollPosition = 0;
    this.configScroll();
  }

  @HostListener('window:resize') onResize() {
    this.configScroll();
  }

  updateScrollPosition(scrollPosition) {
    this.scrollPosition = scrollPosition;
  }
}
