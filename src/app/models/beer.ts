import { BeerReview } from './beer-review';

export class Beer {
  id: number;

  title: string;

  rank: number;

  imageLink: string;

  reviews: BeerReview[];
}


export const beerMock: Beer[] = [
  {
    id: 1,
    title: 'Heineken',
    rank: 4.3,
    imageLink: 'https://www.encopadebalon.com/3470-large_default/heineken-premium-lager-beer-bottle-24-x-330ml.jpg',
    reviews: []
  },
  {
    id: 2,
    title: 'Zagorka',
    rank: 3.4,
    imageLink: 'https://zagorka.bg/img/the-good-here/bottle.png',
    reviews: []
  },
  {
    id: 3,
    title: 'Tuborg',
    rank: 4.7,
    imageLink: 'https://bigbarrel.co.nz/content/images/thumbs/0021817.jpeg',
    reviews: []
  },
  {
    id: 4,
    title: 'Shumensko',
    rank: 2.3,
    imageLink: 'https://bulgarianfood.eu/wp-content/uploads/2015/01/shumensko-can2.jpg',
    reviews: []
  },
  {
    id: 5,
    title: 'Kamenitza',
    rank: 4.3,
    imageLink: 'https://sombrero2.com/wp-content/uploads/2018/04/Sombrero2-Plovdiv-Kamenitza.png',
    reviews: []
  }
];
