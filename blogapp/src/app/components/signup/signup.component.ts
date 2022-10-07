import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
    });
  }

  signup() {
    console.log(this.signUpForm.value);

    this.apiService.register(this.signUpForm.value).subscribe((data:any) => {
      if (data.success) {
        alert('Signup Success');
        this.apiService.setDataToLocalStorage('user', data.data);
        this.router.navigate(['/myposts']);
      } else {
        alert('Signup Failure');
      }
    })

    // this.apiService.login(this.signUpForm?.value).subscribe((data) => {
    //   if (data.success) {
    //     this.apiService.setDataToLocalStorage('user', data.data);
    //     this.router.navigate(['/home']);
    //   } else {
    //     alert('Login Error!');
    //   }
    // });
  }
}
