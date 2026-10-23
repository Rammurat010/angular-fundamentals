import { Component, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { StudentService } from '../services/student.service';
import { StudentListComponent } from './student-list/student-list.component';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [DecimalPipe, RouterLink, StudentListComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css',
})
export class PageComponent {
  title = 'Student Dashboard';

  private studentService = inject(StudentService);

  get students() {
    return this.studentService.students();
  }

  get totalStudents(): number {
    return this.students.length;
  }

  get activeStudents(): number {
    return this.students.filter((student) => student.status === 'Active')
      .length;
  }

  get inactiveStudents(): number {
    return this.students.filter((student) => student.status === 'Inactive')
      .length;
  }

  get activePercentage(): number {
    if (this.totalStudents === 0) {
      return 0;
    }

    return (this.activeStudents / this.totalStudents) * 100;
  }

  get averageMarks(): number {
    if (this.totalStudents === 0) {
      return 0;
    }

    const totalMarks = this.students.reduce(
      (sum, student) => sum + student.marks,
      0,
    );

    return totalMarks / this.totalStudents;
  }
}
