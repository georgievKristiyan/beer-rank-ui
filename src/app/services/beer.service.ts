import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Beer } from '../models/beer';
import { BeerReview } from '../models/beer-review';
import { BEERS_PATH, REVIEWS_PATH } from '../common/const';
import { environment } from 'src/environments/environment';

@Injectable()
export class BeerService {
  private serviceEndpoint = environment.baseUrl || '';

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Beer[]> {
    return this.httpClient.get<Beer[]>(`${this.serviceEndpoint}${BEERS_PATH}`);
  }

  public getBeer(id: number): Observable<Beer> {
    return this.httpClient.get<Beer>(`${this.serviceEndpoint}${BEERS_PATH}/${id}`);
  }

  public addReview(review: BeerReview, beerId: number): Observable<BeerReview> {
    return this.httpClient.post<BeerReview>(`${this.serviceEndpoint}${REVIEWS_PATH}/${beerId}`, review);
  }
}
