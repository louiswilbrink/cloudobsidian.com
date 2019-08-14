import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'co-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  scrollPosition: number;
  totalScrollPositions: number;

  constructor() { }

  configScroll() {
    this.totalScrollPositions = (window.innerHeight * 10) - window.innerHeight;
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
