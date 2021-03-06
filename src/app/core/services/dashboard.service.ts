import { Injectable } from '@angular/core';
import { Track } from '@sharedmodels/track.model';
import { DashboardComponents } from '@sharedenums/dashboard.enum';
import { BehaviorSubject } from 'rxjs';
import { Item } from '@sharedmodels/item.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  defaultState: Array<Track> = [];
  private trackSource = new BehaviorSubject<Track[]>(this.defaultState);
  tracks$ = this.trackSource.asObservable();

  constructor() {
    this.defaultState = [
      {

        card: { cols: 2, rows: 1, },
        items: [{ title: 'CARD 1', component: DashboardComponents.VIEW1, id: 'view-1' }]
      },
      {
        card: { cols: 1, rows: 1 },
        items: [{ title: 'CARD 2', component: DashboardComponents.VIEW2, id: 'view-2' }]
      },
      {

        card: { cols: 1, rows: 1 },
        items: [{ title: 'CARD 3', component: DashboardComponents.VIEW3, id: 'view-3' }]
      }
    ];

    this.trackSource.next(this.defaultState);
  }

  removeItem = (item: Item) => {
    const state = this.trackSource.getValue();
    state.forEach(track => {
      track.items.forEach((i, index) => {
        if (i === item) {
          track.items.splice(index, 1);
        }
      });
    });
  }

  addItems = (item: Item) => {
    const state = this.trackSource.getValue();

    if (state[0].items.indexOf(item) !== -1 || state[1].items.indexOf(item) !== -1) {
      console.warn('item with same id exists');
      return;
    }

    state[0].items.length <= state[1].items.length ? state[0].items.push(item) : state[1].items.push(item);

    this.trackSource.next(state);
  }

  setState = (tracks: Array<Track>) => {
    this.trackSource.next(tracks);
  }
}
