import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, animate, style } from '@angular/animations';

let maxHeight = 200;
let minHeight = 50;

@Component({
  selector: 'app-navbar',
  host: {'(window:scroll)': 'track($event)'},
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('childAnimation', [
      state('big', style({
        height: `${maxHeight}px`,
        lineHeight: `${maxHeight}px`,
      })),
      state('small', style({
        height: `${minHeight}px`,
        lineHeight: `${minHeight}px`,
      })),
      transition('* => *', [
        animate('0.1s')
      ]),
    ]),
  ]
})
export class NavbarComponent implements OnInit {

  bigMenu?: boolean;
  navbarHeight?: number;

  constructor() { }

  ngOnInit() {
    this.bigMenu = false;
    this.navbarHeight = 200;
  }

  track($event: Event) {
    console.log("Scroll Event", $event.srcElement.children[0].scrollTop);
    this.bigMenu = $event.srcElement.children[0].scrollTop >  (this.bigMenu ? 0 : 50);
    this.navbarHeight = 200 - $event.srcElement.children[0].scrollTop;
  }

}
