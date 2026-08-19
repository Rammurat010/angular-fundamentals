import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolationComponent } from './dataBinding/interpolation/interpolation.component';
import { BindingComponent } from './dataBinding/binding/binding.component';
import { EventComponent } from './dataBinding/event/event.component';
import { TwowayComponent } from './dataBinding/twoway/twoway.component';
import { ComponentDirectiveComponent } from './directive/component-directive/component-directive.component';
import { PipeDemoComponent } from './pipe/pipe-demo/pipe-demo.component';
import { AttributeDirectiveComponent } from './directive/attribute-directive/attribute-directive.component';
import { EventDirectiveComponent } from './directive/event-directive/event-directive.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InterpolationComponent,
    BindingComponent,
    EventComponent,
    TwowayComponent,
    ComponentDirectiveComponent,
    PipeDemoComponent,
    AttributeDirectiveComponent,
    EventDirectiveComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';
}
