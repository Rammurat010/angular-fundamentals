import { Component } from '@angular/core';
import { PageComponent } from './page/page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
