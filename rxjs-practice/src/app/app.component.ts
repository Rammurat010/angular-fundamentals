import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { ObservableOfComponent } from './observable-of/observable-of.component';
import { ObservalbleFromComponent } from './observalble-from/observalble-from.component';
import { FromEventComponent } from './from-event/from-event.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ObservableDemoComponent,
    ObservableOfComponent,
    ObservalbleFromComponent,
    FromEventComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'rxjs-practice';
}
