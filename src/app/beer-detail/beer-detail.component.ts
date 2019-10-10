import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BeerDetail } from '../models/beer-detail';
import { UserService } from '../services/user.service';
import { BeerService } from '../services/beer.service';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss']
})
export class BeerDetailComponent implements OnInit {
  username: string = null;
  beerDetail: BeerDetail;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private beerService: BeerService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    const id = +this.route.snapshot.paramMap.get('id');
    this.beerService.getBeerDetail(id).subscribe(detail => {
      console.log(detail);
      this.beerDetail = detail;
    });
  }

  public logout(): void {
    this.userService.logout();
    this.username = null;
  }
}
