import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div>
      <app-badge></app-badge>
      <app-button></app-button>
      <app-rating></app-rating>
    </div>
  `,
  styles: [
  ]
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
