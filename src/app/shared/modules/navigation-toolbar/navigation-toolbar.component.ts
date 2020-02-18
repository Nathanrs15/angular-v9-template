import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { DataService } from '@services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation-toolbar',
  templateUrl: './navigation-toolbar.component.html',
  styleUrls: ['./navigation-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationToolbarComponent implements OnInit, OnDestroy {
  title$: Observable<any>;
  subtitle$: Observable<any>;

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.title$ = this.ds.currentTitle;
    this.subtitle$ = this.ds.currentSubtitle;
  }

  ngOnDestroy() {
    this.ds.setSubtitle(null);
  }

}
