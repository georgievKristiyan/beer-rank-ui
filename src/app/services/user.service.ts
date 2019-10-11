import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user';
import { Token } from '../models/token';
import { CREATE_PATH, LOGIN_PATH } from '../common/const';
import { environment } from 'src/environments/environment';


@Injectable()
export class UserService {
  private serviceEndpoint = environment.baseUrl || '';

  constructor(private httpClient: HttpClient) { }

  public login(user: User): Observable<Token> {
    return this.httpClient.post<Token>(`${this.serviceEndpoint}${LOGIN_PATH}`, user);
  }

  public logout(): void {
    localStorage.clear();
  }

  public register(user: User): Observable<Token> {
    return this.httpClient.post<Token>(`${this.serviceEndpoint}${CREATE_PATH}`, user );
  }
}
