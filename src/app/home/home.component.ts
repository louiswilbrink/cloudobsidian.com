import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'co-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  updateScrollPosition($event) {
    console.log('$event', $event);
  }
}
