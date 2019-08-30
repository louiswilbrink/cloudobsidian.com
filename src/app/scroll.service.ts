import { Injectable, ElementRef } from '@angular/core';
import { Observable, fromEvent, interval } from 'rxjs';
import { throttle } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  scrollPosition$: Observable<any>;

  constructor() { }

  init(scrollElement: ElementRef): void {
    this.scrollPosition$ = fromEvent(scrollElement.nativeElement, 'scroll')
      .pipe(throttle(event => interval(150)));
  }

  getScroll(): Observable<any> {
    return this.scrollPosition$;
  }
}
