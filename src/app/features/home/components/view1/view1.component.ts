import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class View1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
