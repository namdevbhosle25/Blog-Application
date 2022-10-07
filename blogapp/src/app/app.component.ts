import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menuBtns: boolean = false;
  constructor(private apiService: ApiService, private router: Router) {
    if (this.apiService.getUserDetails()) {
      this.menuBtns = true;
    }
  }
  logout() {
    this.apiService.removeLocalStorage();
    this.router.navigate(['/login']);
  }
}
