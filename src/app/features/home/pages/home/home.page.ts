import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DataService } from '@services/data.service';

import { dashboardComponents } from '../../dashboard-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
// tslint:disable-next-line: component-class-suffix
export class HomePage implements OnInit {
  components = dashboardComponents;
  constructor(
    private route: ActivatedRoute,
    private ds: DataService
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.ds.setTitle(data));
  }

}
