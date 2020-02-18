import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '@services/data.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminPage implements OnInit {


  constructor(
    private route: ActivatedRoute,
    private ds: DataService
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.ds.setTitle(data));
  }
}
