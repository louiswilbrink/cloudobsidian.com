import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'co-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() slides: {
    start: number,
    end: number
  }[];

  constructor() { }

  ngOnInit() {
  }
}
