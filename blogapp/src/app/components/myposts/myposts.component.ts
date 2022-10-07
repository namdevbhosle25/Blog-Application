import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.scss'],
})
export class MypostsComponent implements OnInit {
  myposts: any = [];
  user: any;
  msg: string = '';
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.user = this.apiService.getUserDetails();
    let parseUser: any = JSON.parse(this.user);
    let _id = parseUser._id;

    this.apiService.getUserPosts(_id).subscribe((data: any) => {
      if (data.success) {
        this.myposts = data.data;
      } else {
        this.msg = 'You dont have any post posted on this blog site.';
      }
    });

    // this.apiService.getAllPosts().subscribe((data) => {
    //   console.log(data);
    //   this.myposts = data.data;
    // });
  }
}
