import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-ng-after-view-init',
  standalone: true,
  imports: [],
  templateUrl: './ng-after-view-init.component.html',
  styleUrl: './ng-after-view-init.component.css',
})
export class NgAfterViewInitComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() called');
  }
}
