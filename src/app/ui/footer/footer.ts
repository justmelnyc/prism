import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'foot',
  template: `
    <footer>
      <div class="footer-container">
        <div class="copyright">© <span id="copyright"></span> <a href="index.html">Prism New York</a></div>
        <div class="courtesy">
          <div class="email">Email</div>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
  </footer>`
})
export class FootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
