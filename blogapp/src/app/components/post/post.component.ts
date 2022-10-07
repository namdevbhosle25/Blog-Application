import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  postid: any;
  post: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {
    this.postid = this.activatedRoute.snapshot.paramMap.get('postid');
    this.apiService.getPost(this.postid).subscribe(data => {
      console.log(data);
      this.post = data.data;
    })
  }

  ngOnInit(): void {}
}
