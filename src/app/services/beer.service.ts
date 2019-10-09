import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Beer } from '../models/beer';
import { BeerDetails } from '../models/beer-details';
import { BeerReview } from '../models/beer-review';

@Injectable()
export class BeerService {

  constructor(private httpClient: HttpClient) { }

  public getAll(): Beer[] {
    return [];
  }

  public getById(id: string): BeerDetails {
    return null;
  }

  public create(beer: Beer): void {

  }

  public edit(beer: Beer): void {

  }

  public addReview(review: BeerReview): void {

  }
}
