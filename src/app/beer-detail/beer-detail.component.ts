import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../services/user.service';
import { BeerService } from '../services/beer.service';
import { Beer } from '../models/beer';
import { BeerReview } from '../models/beer-review';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss']
})
export class BeerDetailComponent implements OnInit {
  username: string = null;
  beer: Beer;
  newRank = 0;
  newComment: string = null;
  currentReviews: BeerReview[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private beerService: BeerService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    const id = +this.route.snapshot.paramMap.get('id');
    this.beerService.getBeer(id).subscribe(beer => {
      this.beer = beer;
      this.currentReviews = beer.reviews.filter(r => r.comment != null);
    });
  }

  public logout(): void {
    this.userService.logout();
    this.username = null;
  }

  public setRank(rank: number): void {
    this.newRank = rank;
  }

  public submitReview() {
    if (!this.username) {
      return;
    }

    const review = new BeerReview();
    review.comment = this.newComment;
    review.rank = this.newRank;
    review.username = this.username;

    this.beerService.addReview(review, this.beer.id).subscribe(r => {
      this.router.navigate(['/']);
    });
  }
}
