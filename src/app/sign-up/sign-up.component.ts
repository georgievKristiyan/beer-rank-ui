import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { MustMatch } from '../validator/must-match.validator';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('')
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  onSignUp() {
    this.errorMessage = null;
    if (this.signUpForm.invalid) {
      return;
    }

    const user = new User();
    user.username = this.signUpForm.get('username').value;
    user.password = this.signUpForm.get('password').value;

    this.userService.register(user).subscribe((token) => {
      localStorage.setItem('token', token.accessToken);
      localStorage.setItem('username', user.username);
      this.router.navigate(['/']);
    }, (error) => {
      this.errorMessage = 'Username already exists.';
    });
  }
}
