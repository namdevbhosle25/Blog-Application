import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  posts: any = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllPosts().subscribe((data) => {
      console.log(data);
      this.posts = data.data;
    })
  }


}
