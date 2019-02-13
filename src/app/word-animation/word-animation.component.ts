import { Component, OnInit } from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'app-word-animation',
  templateUrl: './word-animation.component.html',
  styleUrls: ['./word-animation.component.scss']
})
export class WordAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const svgPath = document.querySelectorAll('.path');

    const svgText = anime({
      targets: svgPath,
      loop: true,
      direction: 'alternate',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 700,
      delay: (el, i) => { return i * 500 }
    });
  }

}
