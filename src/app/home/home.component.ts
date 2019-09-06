import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { throttle } from 'rxjs/operators';

@Component({
  selector: 'co-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [{ 
    provide: Window, 
    useValue: window 
  }]
})
export class HomeComponent implements OnInit {
  slides: {
    start: number,
    end: number
  }[];

  constructor(private window: Window) { }

  configSlides() {
    const slideTotal = 10;

    // For 10 slides with window height 100px:
    // start slides at scroll position [0, 100, 200, ..],
    // end slides at scroll position [70, 170, 270, ..]
    this.slides = [...Array(slideTotal)].map((x, i) => {
      return {
        start: window.innerHeight * i,
        end: window.innerHeight * (i + 1)
      };
    });
  }

  ngOnInit() {
    this.configSlides();
  }
}
