import { BeerReview } from './beer-review';
import { Beer, beerMock } from './beer';

export class BeerDetail {
  beer: Beer;
  reviews: BeerReview[];
}

export const beerDetailMock: BeerDetail = {
  beer: beerMock[0],
  reviews: []
};
