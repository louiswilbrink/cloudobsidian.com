import { Directive, Input, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Directive({
  selector: '[scrollIntoView]'
})
export class ScrollIntoViewDirective {
  @Input('scrollIntoView') anchor: string;

  constructor(private route: ActivatedRoute, private elementRef: ElementRef) {
    this.route.fragment.subscribe(fragment => {
      if (fragment === this.anchor) {
        this.elementRef.nativeElement.scrollIntoView();
      }
    });
  }
}
