import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.scss'],
})
export class CreatepostComponent implements OnInit {
  postForm!: FormGroup;
  user: any;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      title: [''],
      subtitle: [''],
      content: [''],
      tags: ['']
    });
  }

  createPost() {
    console.log(this.postForm.value);
    let post = this.postForm.value;
    this.user = this.apiService.getUserDetails();
    let parseuser = JSON.parse(this.user);
    post.userid = parseuser._id;
    
    let tags = this.postForm.value.tags;
    let tagArr = tags.split(',');
    console.log(tagArr);
    
    //convert string to array
    // post.tags = convertedArray
    this.apiService.newPost(post).subscribe((data: any) => {
      if (data.success) {
        alert('Posted Success');
        this.router.navigate(['myposts']);
      } else {
        alert('Post Error');
      }
    });
  }
}
