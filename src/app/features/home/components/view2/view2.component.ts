import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class View2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
