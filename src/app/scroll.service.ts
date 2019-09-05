import { Injectable, ElementRef } from '@angular/core';
import { Observable, from, concat, merge, fromEvent, interval } from 'rxjs';
import { Subject } from 'rxjs';
import { throttle, withLatestFrom } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  scrollTop$: Subject<number>;

  constructor() {
    // Declare a scrollTop subject and push a starting value.
    this.scrollTop$ = new Subject<number>();
    this.scrollTop$.next(0); 
  }

  setScrollElement(scrollElement: ElementRef): void {
  }

  getScrollTop(): Observable<number> {
    return this.scrollTop$;
  }
}
