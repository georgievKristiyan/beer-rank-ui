import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Token } from '../models/token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

    this.errorMessage = null;
  }

  onLogin() {
    this.errorMessage = null;
    if (this.loginForm.invalid) {
      return;
    }

    const user = new User();
    user.username = this.loginForm.get('username').value;
    user.password = this.loginForm.get('password').value;

    this.userService.login(user).subscribe((token: Token) => {
      localStorage.setItem('token', token.accessToken);
      localStorage.setItem('username', user.username);
      this.router.navigate(['/']);
    }, (error) => {
      this.errorMessage = 'Invalid credentials.';
    });
  }
}
