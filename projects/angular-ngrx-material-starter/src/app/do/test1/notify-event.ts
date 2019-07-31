import { Injectable } from '@angular/core';
import {Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NotifyEvent {
  private subject = new Subject<any>();

  emitEvent(event: String, payload: Object) {
    this.subject.next({ event, payload });
  }

  onEvent(): Observable<any> {    
    return this.subject.asObservable();
  }
}
