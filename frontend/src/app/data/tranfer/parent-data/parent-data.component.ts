import { Component } from '@angular/core';

import { ChildDataComponent } from '../child-data/child-data.component';

@Component({
  selector: 'app-parent-data',
  standalone: true,
  imports: [ChildDataComponent],
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.css',
})
export class ParentDataComponent {
  parentData = '';

  users: string[] = [];

  Show_value(dataValue: { message: string; users: string[] }): void {
    this.parentData = dataValue.message;

    this.users = dataValue.users;
  }
}
