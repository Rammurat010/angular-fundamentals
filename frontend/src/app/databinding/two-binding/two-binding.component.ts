import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-binding.component.html',
  styleUrl: './two-binding.component.css',
})
export class TwoBindingComponent {
  name = '';
  ShowData() {
    console.log(this.name);
  }
}
