import { Component, OnInit } from '@angular/core';
import { TypeService } from '../type.service';
import { _ } from 'underscore';
import * as anime from 'animejs';
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  type: String;
  typeString: String;
  loops: number;

  constructor(private typeService: TypeService) { }

  ngOnInit() {
    this.getType();
    this.loops = 1;
    this.typeString = this.type === 'Eng' ? 'Ingenieria' : 'Musica';
  }

  changeCV(): void {
    this.typeService.changeType();
    this.getType();

    $('.carousel').carousel('next');

    anime.timeline({
      endDelay: 1000,
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: false
    })
    .add({ targets: '.navbar',  background: this.type === 'Eng' ? 'rgb(158, 165, 206)' : 'rgb(206, 158, 158)'}, 0);

    anime({
      targets: '.icon',
      rotate: `${this.loops++}turn`,
      duration: 1000,
      easing: 'easeInOutCirc'
    });

    this.typeString = this.type === 'Eng' ? 'Ingenieria' : 'Musica';
  }

  throttleChangeCV = _.throttle(this.changeCV,1000);

  scrollToElement(element): void {
    $(element)[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  getType(): void {
    this.type = this.typeService.getType();
  }

}
