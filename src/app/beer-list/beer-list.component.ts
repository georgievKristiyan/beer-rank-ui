import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';
import { BeerService } from '../services/beer.service';
import { Beer } from '../models/beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  username: string = null;
  beers: Beer[] = [];

  constructor(
    private userService: UserService,
    private beerService: BeerService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.beerService.getAll().subscribe(allBeers => {
      this.beers = allBeers;
    });
  }

  public logout(): void {
    this.userService.logout();
    this.username = null;
  }
}
