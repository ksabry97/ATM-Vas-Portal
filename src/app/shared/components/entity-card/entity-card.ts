import { Component, Input } from '@angular/core';

interface Item {
  label: string;
  count: number;
}
@Component({
  selector: 'app-entity-card',
  imports: [],
  templateUrl: './entity-card.html',
  styleUrl: './entity-card.scss',
})
export class EntityCard {
  @Input() item!: Item;
}
