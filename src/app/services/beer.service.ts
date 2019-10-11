import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Beer, beerMock } from '../models/beer';
import { BeerReview } from '../models/beer-review';

@Injectable()
export class BeerService {

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Beer[]> {
    return of(beerMock);
  }

  public getBeer(id: number): Observable<Beer> {
    return of(beerMock[id - 1]);
  }

  public addReview(review: BeerReview): Observable<BeerReview> {
    return of(review);
  }
}
