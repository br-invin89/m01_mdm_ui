import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { NotifyEvent } from '../notify-event';
import { Subscription } from 'rxjs';

@Component({
  selector: 'do-test1-value-add-form',
  templateUrl: './add-form.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddFormComponent implements OnInit {
  addForm: FormGroup;
  subscription: Subscription;

  constructor(
    private formBuilder:FormBuilder, 
    private dataService: DataService,
    private notifyEvent: NotifyEvent,
    private changeRef: ChangeDetectorRef
  ) { 
    this.addForm = this.formBuilder.group({
      code: '',
      name: '',
      nameEn: '',
      key: '',
      categoryCode: ''
    })

    this.subscription = this.notifyEvent.onEvent().subscribe(res => {
      if (res.event=='category_select') {
        this.addForm.controls['categoryCode'].setValue(res.payload.category.code);
        // this.changeRef.markForCheck();
      }
    })
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSave() {
    this.dataService.postNewValue(this.addForm.value).subscribe(
      (res) => {
        this.notifyEvent.emitEvent('value_added', {});
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
