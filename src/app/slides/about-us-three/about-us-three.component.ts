import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Router } from '@angular/router';

@Component({
  selector: 'co-about-us-three',
  templateUrl: './about-us-three.component.html',
  styleUrls: ['./about-us-three.component.scss']
})
export class AboutUsThreeComponent implements OnInit {
  @Input() isMobile: boolean = false;

  lottieConfig: {
    path: string;
    renderer: string;
    autoplay: boolean;
    loop: boolean;
  }

  constructor(private router: Router) { }

  navigate() {
    if (this.isMobile) {
      this.router.navigate(['/services-and-pricing']);
    } else {
      this.router.navigate([''], { fragment: 'services' });
    }
  }

  ngOnInit() {
    this.lottieConfig = {
      path: 'assets/live-url.json',
      renderer: 'svg',
      autoplay: true,
      loop: true
    };
  }
}
