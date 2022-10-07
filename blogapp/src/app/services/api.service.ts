import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  REST_API: string = 'http://localhost:3000/api';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  getUserDetails() {
    if (localStorage.getItem('user')) {
      return localStorage.getItem('user');
    } else {
      return null;
    }
  }

  setDataToLocalStorage(keyName: any, data: any) {
    localStorage.setItem(keyName, JSON.stringify(data));
  }

  removeLocalStorage() {
    localStorage.clear();
  }

  register(registerData: any) {
    return this.http.post(`${this.REST_API}/signup`, registerData, {
      headers: this.httpHeaders,
    });
  }

  login(loginData: any): Observable<any> {
    return this.http.post(`${this.REST_API}/login`, loginData, {
      headers: this.httpHeaders,
    });
  }

  getAllPosts(): Observable<any> {
    return this.http.get(`${this.REST_API}/posts`);
  }

  getPost(postid: any): Observable<any> {
    return this.http.get(`${this.REST_API}/post/${postid}`).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  getUserPosts(userId: any) {
    return this.http.get(`${this.REST_API}/posts/${userId}`);
  }

  newPost(postData: any) {
    return this.http.post(`${this.REST_API}/post`, postData, {
      headers: this.httpHeaders,
    });
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      errorMessage;
    });
  }
}
