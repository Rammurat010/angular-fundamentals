import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPipePipe } from '../my-pipe.pipe';

@Component({
  selector: 'app-pipe-demo',
  standalone: true,
  imports: [CommonModule, MyPipePipe],
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css'],
})
export class PipeDemoComponent {
  today = new Date();
  amount = 1500;
  name = 'angular pipes';
  user = { name: 'Murat', age: 25 };
}
