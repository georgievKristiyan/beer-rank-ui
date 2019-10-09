import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  username: string = null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
  }

  public logout(): void {
    this.userService.logout();
    this.username = null;
  }
}
