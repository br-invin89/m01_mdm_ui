import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DataService } from '../data.service';
import { NotifyEvent } from '../notify-event';
import { Subscription } from 'rxjs';

@Component({
  selector: 'do-test1-value',
  templateUrl: './value.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValueComponent implements OnInit {
  private values: any[];
  subscription: Subscription;
  selectedValue = {};

  constructor(
    private dataService: DataService,
    private notifyEvent: NotifyEvent,
    private changeRef: ChangeDetectorRef
  ) {
    this.subscription = this.notifyEvent.onEvent().subscribe(res => {
      if (res.event=='value_added') {
        this.dataService.getAllValues().subscribe(res => {
          this.values = res;
          this.changeRef.markForCheck();          
        });
      }
    })
  }

  ngOnInit() {
    this.dataService.getAllValues().subscribe(res => {
      this.values = res;
      this.changeRef.markForCheck();
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  select(v) {
    this.selectedValue = v;
    this.notifyEvent.emitEvent('value_select', {value: v});
  }

}
