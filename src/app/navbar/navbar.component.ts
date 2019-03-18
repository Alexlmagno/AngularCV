import { Component, OnInit } from '@angular/core';
import { TypeService } from '../type.service';
import * as anime from 'animejs';
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  type: String;

  constructor(private typeService: TypeService) { }

  ngOnInit() {
    this.getType();
  }

  changeCV() {
    this.typeService.changeType();
    this.getType();
    $('.carousel').carousel('next');
    var colorsExamples = anime.timeline({
      endDelay: 1000,
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: false
    })
    .add({ targets: '.navbar',  background: this.type === 'Eng' ? 'rgb(158, 165, 206)' : 'rgb(206, 158, 158)'}, 0);
  }

  getType(): void {
    this.type = this.typeService.getType();
  }

}
