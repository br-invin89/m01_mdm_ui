import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'anms-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Test1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
