import { Component } from '@angular/core';

import { NgAfterContentCheckedChildComponent } from '../ng-after-content-checked-child/ng-after-content-checked-child.component';

@Component({
  selector: 'app-ng-after-content-checked-parent',
  standalone: true,
  imports: [NgAfterContentCheckedChildComponent],
  templateUrl: './ng-after-content-checked-parent.component.html',
})
export class NgAfterContentCheckedParentComponent {}
