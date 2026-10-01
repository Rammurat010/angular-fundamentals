import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolationComponent } from './databinding/interpolation/interpolation.component';
import { PropertyComponent } from './databinding/property/property.component';
import { EventBindingComponent } from './databinding/event-binding/event-binding.component';
import { TwoBindingComponent } from './databinding/two-binding/two-binding.component';
import { AttributeComponent } from './directives/attribute/attribute.component';
import { StructuralComponent } from './directives/structural/structural.component';
import { PipePracticeComponent } from './pipe/pipe-practice/pipe-practice.component';
import { ParentComponent } from './data/tranfer/parent/parent.component';
import { ChildComponent } from './data/tranfer/child/child.component';
import { ParentDataComponent } from './data/tranfer/parent-data/parent-data.component';
import { ChildDataComponent } from './data/tranfer/child-data/child-data.component';
import { NgOnInitComponent } from './hook/onInit/ng-on-init/ng-on-init.component';
import { NgDoCheckComponent } from './hook/doCheck/ng-do-check/ng-do-check.component';
import { NgDestroyComponent } from './hook/destroy/ng-destroy/ng-destroy.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InterpolationComponent,
    PropertyComponent,
    EventBindingComponent,
    TwoBindingComponent,
    AttributeComponent,
    StructuralComponent,
    PipePracticeComponent,
    ParentComponent,
    ChildComponent,
    ParentDataComponent,
    ChildDataComponent,
    NgOnInitComponent,
    NgDoCheckComponent,
    NgDestroyComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';
}
