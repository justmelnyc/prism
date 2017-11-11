import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top',
  template: `
    <header>
      <a href="#">Prism</a>
      <a href="#">info</a>
    </header>
  `
})
export class TopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
