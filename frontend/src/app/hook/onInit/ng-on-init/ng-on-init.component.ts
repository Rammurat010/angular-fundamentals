import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-on-init',
  standalone: true,
  imports: [],
  templateUrl: './ng-on-init.component.html',
  styleUrl: './ng-on-init.component.css',
})
export class NgOnInitComponent implements OnInit {
  ngOnInit(): void {
    let a = 5;
    let b = 6;
    let c = a + b;

    console.log(c);
  }
}
