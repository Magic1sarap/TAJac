import { Component, OnInit } from '@angular/core';
import simpleParallax from 'simple-parallax-js';

@Component({
  selector: 'app-event-showcase',
  templateUrl: './event-showcase.component.html',
  styleUrls: ['./event-showcase.component.scss']
})
export class EventShowcaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var image = document.getElementById('event-photo1');
    var image2 = document.getElementById('event-photo2'); 
    new simpleParallax(image, {
      scale: 2
    });
    new simpleParallax(image2, {
      scale: 2
    });
  }

}
