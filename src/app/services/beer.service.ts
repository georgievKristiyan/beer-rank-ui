import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Beer, beerMock } from '../models/beer';
import { BeerDetail, beerDetailMock } from '../models/beer-detail';
import { BeerReview } from '../models/beer-review';

@Injectable()
export class BeerService {

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Beer[]> {
    return of(beerMock);
  }

  public getBeerDetail(id: number): Observable<BeerDetail> {
    return of(beerDetailMock);
  }

  public create(beer: Beer): Observable<Beer> {
    return null;
  }

  public edit(beer: Beer): Observable<Beer> {
    return null;
  }

  public addReview(review: BeerReview): Observable<BeerReview> {
    return null;
  }
}
