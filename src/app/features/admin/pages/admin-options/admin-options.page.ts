import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-admin-options',
  templateUrl: './admin-options.page.html',
  styleUrls: ['./admin-options.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminOptionsPage implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
