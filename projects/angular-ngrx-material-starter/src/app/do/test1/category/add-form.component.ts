import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { NotifyEvent } from '../notify-event';

@Component({
  selector: 'do-test1-category-add-form',
  templateUrl: './add-form.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddFormComponent implements OnInit {
  addForm: FormGroup;

  constructor(
    private formBuilder:FormBuilder, 
    private dataService: DataService,
    private notifyEvent: NotifyEvent
  ) { 
    this.addForm = this.formBuilder.group({
      code: '',
      name: '',
      nameEn: ''
    })
  }

  ngOnInit() {
  }

  onSave() {
    this.dataService.postNewCategory(this.addForm.value).subscribe(
      (res) => {
        this.notifyEvent.emitEvent('category_added', {});
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
