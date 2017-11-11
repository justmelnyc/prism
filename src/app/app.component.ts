import { Component } from '@angular/core';

@Component({
  selector: 'root',
  template: `
    <h1>Prism</h1>

    <router-outlet></router-outlet>
  `,
  styles: [``]
})
export class AppComponent {
  title = 'app';
}
