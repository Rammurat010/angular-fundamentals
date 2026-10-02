import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-change-child',
  standalone: true,
  imports: [],
  templateUrl: './on-change-child.component.html',
  styleUrl: './on-change-child.component.css',
})
export class OnChangeChildComponent implements OnChanges {
  @Input() nameParent = '';
  ngOnChanges(): void {
    console.log('name is changing');
  }
}
