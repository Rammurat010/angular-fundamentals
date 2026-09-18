import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Post } from '../../models/post';
import { Subject, of } from 'rxjs';
import {
  switchMap,
  tap,
  map,
  catchError,
  finalize,
  takeUntil,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs/operators';
@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  loading = false;
  searchText = '';

  private searchSubject = new Subject<string>();
  currentPage = 1;
  pageSize = 8;
  totalPosts = 0;
  totalPages = 0;
  private pageSubject = new Subject<number>();
  private destroy$ = new Subject<void>();

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.searchSubject
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => {
          this.currentPage = 1;
          this.loading = true;
        }),
        switchMap((search) => {
          return this.apiService.getPosts(100, 0).pipe(
            map((response) => {
              let data = response.posts;
              const value = search.toLowerCase().trim();
              if (value !== '') {
                data = data.filter((post: Post) => {
                  return (
                    post.title.toLowerCase().includes(value) ||
                    post.body.toLowerCase().includes(value) ||
                    post.id.toString().includes(value)
                  );
                });
              }
              return data;
            }),
            catchError((error) => {
              console.log('Posts Search API Error:', error);
              return of([] as Post[]);
            }),
            finalize(() => {
              this.loading = false;
            }),
          );
        }),
        takeUntil(this.destroy$),
      )
      .subscribe({
        next: (posts) => {
          this.posts = posts;
          this.totalPosts = posts.length;
          this.totalPages = Math.ceil(this.totalPosts / this.pageSize);
        },
      });
    this.pageSubject
      .pipe(
        tap(() => {
          this.loading = true;
        }),
        switchMap((page) => {
          const skip = (page - 1) * this.pageSize;
          return this.apiService.getPosts(this.pageSize, skip).pipe(
            map((response) => {
              this.totalPosts = response.total;
              this.totalPages = Math.ceil(this.totalPosts / this.pageSize);
              return response.posts;
            }),
            catchError((error) => {
              console.log('Posts API Error:', error);
              return of([] as Post[]);
            }),
            finalize(() => {
              this.loading = false;
            }),
          );
        }),
        takeUntil(this.destroy$),
      )
      .subscribe({
        next: (posts) => {
          this.posts = posts;
        },
      });
    this.pageSubject.next(1);
  }
  searchPosts(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchText = input.value;
    this.searchSubject.next(this.searchText);
  }
  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
    this.pageSubject.next(page);
  }
  previousPage(): void {
    if (this.currentPage > 1) {
      this.changePage(this.currentPage - 1);
    }
  }
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.changePage(this.currentPage + 1);
    }
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
