import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'co-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  scrollScript: [] = [];

  @Input() scrollPosition: number;
  @Input() height: number;

  constructor() { }

  ngOnInit() {
  }

}
