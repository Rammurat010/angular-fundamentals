import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ng-destroy',
  standalone: true,
  imports: [],
  templateUrl: './ng-destroy.component.html',
  styleUrl: './ng-destroy.component.css',
})
export class NgDestroyComponent implements OnDestroy {
  show = true;

  hideComponent() {
    this.show = false;
  }

  ngOnDestroy() {
    console.log('Component Destroyed');
  }
}
