import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ViewChild, ElementRef, HostListener } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { throttle } from 'rxjs/operators';

import { ScrollService } from '../scroll.service';

@Component({
  selector: 'co-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('scrollContainer') scrollContainer: ElementRef;

  slides: {
    start: number,
    end: number
  }[];
  slideTotal: number;
  scrollPosition: number;
  totalScrollPositions: number;

  constructor(private scrollService: ScrollService) {
    this.slideTotal = 10;
  }

  configScroll() {
    this.totalScrollPositions = (window.innerHeight * this.slideTotal) - window.innerHeight;

    // For 10 slides with window height 100px:
    // start slides at scroll position [0, 100, 200, ..],
    // end slides at scroll position [70, 170, 270, ..]
    this.slides = [...Array(this.slideTotal)].map((x, i) => {
      return {
        start: window.innerHeight * i,
        end: window.innerHeight * (i + 1)
      };
    });
  }

  ngOnInit() {
    this.scrollPosition = 0;
    this.configScroll();
  }

  ngAfterViewInit() {
    this.scrollService.setScrollElement(this.scrollContainer);
  }

  @HostListener('window:resize') onResize() {
    this.configScroll();
  }

  updateScrollPosition(scrollPosition) {
    this.scrollPosition = scrollPosition;
  }
}
