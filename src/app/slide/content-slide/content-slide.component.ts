import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'co-content-slide',
  templateUrl: './content-slide.component.html',
  styleUrls: ['./content-slide.component.scss']
})
export class ContentSlideComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;
  @Input() buttonText: string;

  constructor() { }

  ngOnInit() {
  }

}
