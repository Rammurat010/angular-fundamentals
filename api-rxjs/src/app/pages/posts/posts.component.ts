import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  loading = false;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.loading = true;
    this.apiService.getPosts().subscribe({
      next: (response) => {
        this.posts = response.posts;
        this.loading = false;
      },

      error: (error) => {
        console.log('Posts API Error', error);
        this.loading = false;
      },
    });
  }
}
