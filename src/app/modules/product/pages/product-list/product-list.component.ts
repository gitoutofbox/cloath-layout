import { Component, OnInit } from '@angular/core';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  stagger, 
  animateChild,
  state,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  animations: [
    trigger(
      'showMenu', 
      [
        transition(
          ':enter', [
            style({ transform: 'translateX(-50px)' }),
            animate('1s', keyframes([
              style({transform: 'translateX(-50px)', offset: 0}),
              style({transform: 'translateX(100px)', offset: 0.5}),
              style({transform: 'translateX(0px)', offset: 1}),
            ]))
          ]
        ),
        transition(
          ':leave', [
            animate('1s', style({ transform: 'translateX(-50px)' }))
          ]
        )
      ]
    ),

    trigger( 'categorySlide', [
      state('open', style({
        position: 'absolute',        
        left: '15px'
      })),
      state('closed', style({
        position: 'absolute',
        left: '-200px'
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.2s')
      ])
    ])
  ]
})
export class ProductListComponent implements OnInit {
  showMenu: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

}
