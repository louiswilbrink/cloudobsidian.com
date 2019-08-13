import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'co-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  scrollPosition: number;
  height: number;

  constructor() { }

  ngOnInit() {
    this.scrollPosition = 0;
    this.height = window.innerHeight;
  }

  @HostListener('window:resize') onResize() {
    this.height = window.innerHeight;
  }

  updateScrollPosition(scrollPosition) {
    this.scrollPosition = scrollPosition;
  }
}
