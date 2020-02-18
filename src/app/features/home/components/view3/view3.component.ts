import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-view3',
  templateUrl: './view3.component.html',
  styleUrls: ['./view3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class View3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
