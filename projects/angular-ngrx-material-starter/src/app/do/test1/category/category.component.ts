import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DataService } from '../data.service';
import { NotifyEvent } from '../notify-event';
import { Subscription } from 'rxjs';

@Component({
  selector: 'do-test1-category',
  templateUrl: './category.component.html',
  styles: [`
    .mat-button {
      width: 100%; overflow: hidden; text-align: left;
    }
    .mat-list-item-content {
      padding: 0 !important;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryComponent implements OnInit {
  private categories: any[];
  subscription: Subscription;
  selectedCategory = {};

  constructor(
    private dataService: DataService,
    private notifyEvent: NotifyEvent,
    private changeRef: ChangeDetectorRef
  ) {    
    this.subscription = this.notifyEvent.onEvent().subscribe(res => {
      if (res.event=='category_added') {
        this.dataService.getAllCategories().subscribe(res => {
          this.categories = res;
          this.changeRef.markForCheck();          
        });
      }
    })
  }

  ngOnInit() {
    this.dataService.getAllCategories().subscribe(res => {
      this.categories = res;
      this.changeRef.markForCheck();      
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  select(c) {
    this.selectedCategory = c;
    this.notifyEvent.emitEvent('category_select', {category: c});
  }
}
