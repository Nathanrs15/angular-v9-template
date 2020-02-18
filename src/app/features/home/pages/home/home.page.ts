import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
// tslint:disable-next-line: component-class-suffix
export class HomePage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private ds: DataService
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.ds.setTitle(data));
  }

}
