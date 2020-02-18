import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private titleSource = new BehaviorSubject({ title: 'DemoNgV9', path: '' });
  currentTitle = this.titleSource.asObservable();

  private subtitleSource = new BehaviorSubject(null);
  currentSubtitle = this.subtitleSource.asObservable();

  names = ['James', 'Dimebag'];

  constructor() { }

  setTitle(title) {
    this.titleSource.next(title);
  }

  setSubtitle(subtitle: string) {
    this.subtitleSource.next(subtitle);
  }

}
