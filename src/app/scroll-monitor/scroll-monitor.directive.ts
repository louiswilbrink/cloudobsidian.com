import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[scroll-monitor]'
})
export class ScrollMonitorDirective {
  @Output() onScroll = new EventEmitter<number>();

  constructor() { }

  @HostListener('scroll', ['$event'])
    reportScrollPosition($event) {
      this.onScroll.emit($event.srcElement.scrollTop);
   }
}
