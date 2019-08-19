import { Component, OnInit } from '@angular/core';
import simpleParallax from 'simple-parallax-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var image = document.getElementsByClassName('thumbnail');
    var image2 = document.getElementsByClassName('thumbnail2'); 
    new simpleParallax(image, {
      scale: 2
    });
    new simpleParallax(image2, {
      scale: 2
    });
  }
}
