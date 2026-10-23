import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Student, StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent {
  private studentService = inject(StudentService);

  searchText = '';

  get students(): Student[] {
    const search = this.searchText.toLowerCase().trim();

    return this.studentService
      .students()
      .filter(
        (student) =>
          student.name.toLowerCase().includes(search) ||
          student.course.toLowerCase().includes(search),
      );
  }

  editStudent(student: Student): void {
    const name = prompt('Student name:', student.name);

    if (name === null || !name.trim()) {
      return;
    }

    const course = prompt('Course:', student.course);

    if (course === null || !course.trim()) {
      return;
    }

    const marksText = prompt('Marks between 0 and 100:', String(student.marks));

    if (marksText === null || marksText.trim() === '') {
      return;
    }

    const marks = Number(marksText);

    if (!Number.isFinite(marks) || marks < 0 || marks > 100) {
      alert('Marks must be between 0 and 100.');
      return;
    }

    this.studentService.updateStudent({
      ...student,
      name: name.trim(),
      course: course.trim(),
      marks,
    });
  }

  deleteStudent(id: number): void {
    if (confirm('Do you want to delete this student?')) {
      this.studentService.deleteStudent(id);
    }
  }
}
