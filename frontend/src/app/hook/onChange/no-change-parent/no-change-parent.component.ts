import { Component } from '@angular/core';
import { OnChangeChildComponent } from '../on-change-child/on-change-child.component';

@Component({
  selector: 'app-no-change-parent',
  standalone: true,
  imports: [OnChangeChildComponent],
  templateUrl: './no-change-parent.component.html',
  styleUrl: './no-change-parent.component.css',
})
export class NoChangeParentComponent {
  name = 'ram';
  Change_name(): void {
    this.name = 'murat';
  }
}
