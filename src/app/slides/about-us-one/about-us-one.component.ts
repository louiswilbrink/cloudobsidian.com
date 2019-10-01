import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'co-about-us-one',
  templateUrl: './about-us-one.component.html',
  styleUrls: ['./about-us-one.component.scss']
})
export class AboutUsOneComponent implements OnInit {
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
      this.router.navigate(['/process']);
    } else {
      this.router.navigate([''], { fragment: 'process' });
    }
  }

  ngOnInit() {
    this.lottieConfig = {
      path: 'assets/coders-and-designers.json',
      renderer: 'svg',
      autoplay: true,
      loop: true
    };
  }
}
