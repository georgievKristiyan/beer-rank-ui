import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ClarityModule } from '@clr/angular';

import { BeerListComponent } from './beer-list.component';
import { BeerService } from '../services/beer.service';
import { UserService } from '../services/user.service';

describe('BeerListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ClarityModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        BeerListComponent
      ],
      providers: [
        UserService,
        BeerService
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BeerListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
