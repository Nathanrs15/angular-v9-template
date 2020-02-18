import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.page.html',
  styleUrls: ['./permissions.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PermissionsPage implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private ds: DataService
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.ds.setSubtitle(data.subtitle));
  }

  ngOnDestroy() {
    this.ds.setSubtitle(null);
  }

}
