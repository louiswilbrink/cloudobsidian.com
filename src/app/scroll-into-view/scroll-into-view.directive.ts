import { Directive, Input, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Directive({
  selector: '[scrollIntoView]'
})
export class ScrollIntoViewDirective implements OnInit {
  @Input('scrollIntoView') anchor: string;

  constructor(
    private route: ActivatedRoute, 
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment === this.anchor) {
        this.elementRef.nativeElement.scrollIntoView();
      }
    });
  }
}
