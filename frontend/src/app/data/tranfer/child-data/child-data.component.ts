import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-data',
  standalone: true,
  imports: [],
  templateUrl: './child-data.component.html',
  styleUrl: './child-data.component.css',
})
export class ChildDataComponent {
  @Output() data = new EventEmitter<{
    message: string;
    users: string[];
  }>();

  Show_data(): void {
    const message = 'Hello Parent, how are you?';

    const users = ['Rammurat', 'Rahul', 'Amit', 'Vikas'];

    this.data.emit({
      message: message,
      users: users,
    });
  }
}
