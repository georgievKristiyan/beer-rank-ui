import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

import { User } from '../models/user';
import { Token } from '../models/token';


@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public login(user: User): Observable<Token> {
    const token = new Token();
    token.accessToken = window.btoa(`${user.username}:${user.password}`);
    return throwError(token);
  }

  public logout(): void {
    localStorage.clear();
  }

  public register(user: User): Observable<Token> {
    const token = new Token();
    token.accessToken = window.btoa(`${user.username}:${user.password}`);
    return of(token);
  }
}
