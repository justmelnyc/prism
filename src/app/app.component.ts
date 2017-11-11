import { Component } from '@angular/core';

@Component({
  selector: 'root',
  template: `
    <div id="app" class="wrapper">
      <top></top>
      <router-outlet></router-outlet>
      <foot></foot>
    </div>

    
  `
})
export class AppComponent {
  title = 'app';
}
