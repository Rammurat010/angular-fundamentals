import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-practice',
  standalone: true,
  imports: [UpperCasePipe, CurrencyPipe, DatePipe],
  templateUrl: './pipe-practice.component.html',
  styleUrl: './pipe-practice.component.css',
})
export class PipePracticeComponent {
  name = 'murat';
  salary = 45000;
  today = new Date();
}
