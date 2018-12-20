import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, animate, style } from '@angular/animations';

let maxHeight = 120;
let minHeight = 60;

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
  collapsed?: boolean;
  maxHeight?: number;
  navbarHeight?: number;

  constructor() { }

  ngOnInit() {
    this.bigMenu = false;
    this.navbarHeight = maxHeight;
    this.maxHeight = maxHeight;
    this.collapsed = false;
  }

  track($event: Event) {
    console.log("Scroll Event", $event.srcElement.children[0].scrollTop);
    this.bigMenu = $event.srcElement.children[0].scrollTop >  (this.bigMenu ? 0 : 50);
    this.navbarHeight = this.maxHeight - $event.srcElement.children[0].scrollTop;
    this.navbarHeight = this.navbarHeight > minHeight ? this.navbarHeight : minHeight;
  }

}
