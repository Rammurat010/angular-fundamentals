import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css',
})
export class AddStudentComponent {
  private studentService = inject(StudentService);
  private router = inject(Router);

  name = '';
  course = '';
  marks: number | null = null;

  addStudent(): void {
    const studentName = this.name.trim();

    if (
      studentName.length < 2 ||
      !this.course ||
      this.marks === null ||
      !Number.isFinite(this.marks) ||
      this.marks < 0 ||
      this.marks > 100
    ) {
      alert('Please enter valid student details.');
      return;
    }

    this.studentService.addStudent({
      name: studentName,
      course: this.course,
      marks: this.marks,
      status: 'Active',
    });

    this.router.navigate(['/dashboard']);
  }
}
