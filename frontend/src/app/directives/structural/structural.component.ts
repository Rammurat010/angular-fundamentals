import { Component } from '@angular/core';

@Component({
  selector: 'app-structural',
  standalone: true,
  imports: [],
  templateUrl: './structural.component.html',
  styleUrl: './structural.component.css',
})
export class StructuralComponent {
  data = true;
  valueData = 6;
  datalist: number[] = [4, 5, 6, 7, 7, 66, 5];
  dataString: string[] = ['Murat', 'Rahul', 'Amit', 'Ravi'];
}
