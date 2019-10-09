import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user';
import { Token } from '../models/token';
import { CREATE_PATH, LOGIN_PATH } from '../common/const';


@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public login(user: User): Observable<Token> {
    return this.httpClient.post<Token>(`http://localhost:8080${LOGIN_PATH}`, user);
  }

  public logout(): void {
    localStorage.clear();
  }

  public register(user: User): Observable<Token> {
    return this.httpClient.post<Token>(`http://localhost:8080${CREATE_PATH}`, user );
  }
}
