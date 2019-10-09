import { Injectable } from '@angular/core';
import { Beer } from '../models/beer';
import { BeerDetails } from '../models/beer-details';
import { BeerReview } from '../models/beer-review';

@Injectable()
export class BeerService {
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
