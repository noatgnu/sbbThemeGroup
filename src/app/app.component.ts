import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Structural and Computational Biology Theme Group';
  collapsed = true;

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
}
