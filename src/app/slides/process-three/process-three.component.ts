import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'co-process-three',
  templateUrl: './process-three.component.html',
  styleUrls: ['./process-three.component.scss']
})
export class ProcessThreeComponent implements OnInit {
  lottieConfig: {
    path: string;
    renderer: string;
    autoplay: boolean;
    loop: boolean;
  }

  constructor() { }

  ngOnInit() {
    this.lottieConfig = {
      path: 'assets/live-url.json',
      renderer: 'svg',
      autoplay: true,
      loop: true
    };
  }
}
