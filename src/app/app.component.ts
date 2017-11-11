import { Component } from '@angular/core';

@Component({
  selector: 'root',
  template: `
    <div id="app" class="wrapper">
      <header>
        <a href="#">Prism</a>
        <a href="#">info</a>
      </header>
      <section class="intro">
        <h2>
          <b>Ahoy there</b> &mdash; <b>I'm a product designer passionate about solving interesting problems from vision to the last 5
          <small>%</small></b>
          <br>
          <span id="magic">(where the magic happens)</span>
        </h2>
      </section>
      <section class="projects">
        <div class="project">
          <span class="meta-data code">3D Projection Mapping</span>
          <a href="#" class="faux-link">Using machine learning to create a better color tool for designers.</a>
        </div>
        <div class="project">
          <span class="meta-data code">Content Creation</span>
          <a href="#" class="faux-link">The text based RPG game in need of a writer.</a>
        </div>
        <div class="project">
          <span class="meta-data code">Custom LED Installations</span>
          <a href="#"  class="faux-link">Helping New Yorkers become more flood resilient.</a>
        </div>
        <div class="project">
          <span class="meta-data code">Software Development</span>
          <a href="#" class="faux-link">Prototyping a behavior change app to help me quit smoking.</a>
        </div>
        
      </section>
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
      </footer>
    </div>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'app';
}
