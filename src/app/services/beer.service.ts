import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Beer } from '../models/beer';
import { BeerReview } from '../models/beer-review';
import { BEERS_PATH, REVIEWS_PATH } from '../common/const';

@Injectable()
export class BeerService {

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Beer[]> {
    return this.httpClient.get<Beer[]>(`http://localhost:8080${BEERS_PATH}`);
  }

  public getBeer(id: number): Observable<Beer> {
    return this.httpClient.get<Beer>(`http://localhost:8080${BEERS_PATH}/${id}`);
  }

  public addReview(review: BeerReview, beerId: number): Observable<BeerReview> {
    return this.httpClient.post<BeerReview>(`http://localhost:8080${REVIEWS_PATH}/${beerId}`, review);
  }
}
