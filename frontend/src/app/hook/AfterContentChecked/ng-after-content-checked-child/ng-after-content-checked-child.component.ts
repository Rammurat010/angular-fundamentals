import { AfterContentChecked, Component } from '@angular/core';

@Component({
  selector: 'app-ng-after-content-checked-child',
  standalone: true,
  templateUrl: './ng-after-content-checked-child.component.html',
})
export class NgAfterContentCheckedChildComponent implements AfterContentChecked {
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked() called');
  }
}
