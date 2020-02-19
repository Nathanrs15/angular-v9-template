import { Item } from './item.model';
import { Card } from './card.model';

export interface Track {
  // title: string;
  card: Card;
  items: Array<Item>;
}
