import { Injectable, signal } from '@angular/core';

export interface Student {
  id: number;
  name: string;
  course: string;
  marks: number;
  status: 'Active' | 'Inactive';
}

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students = signal<Student[]>([
    {
      id: 1,
      name: 'Rahul Yadav',
      course: 'Angular Development',
      marks: 85,
      status: 'Active',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      course: 'JavaScript',
      marks: 92,
      status: 'Inactive',
    },
    {
      id: 3,
      name: 'Aman Kumar',
      course: 'Node.js',
      marks: 68,
      status: 'Active',
    },
  ]);

  addStudent(student: Omit<Student, 'id'>): void {
    this.students.update((list) => [...list, { id: Date.now(), ...student }]);
  }

  updateStudent(updated: Student): void {
    this.students.update((list) =>
      list.map((student) => (student.id === updated.id ? updated : student)),
    );
  }

  deleteStudent(id: number): void {
    this.students.update((list) => list.filter((student) => student.id !== id));
  }
}
