import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ClarityModule } from '@clr/angular';

import { BeerDetailComponent } from './beer-detail.component';
import { BeerService } from '../services/beer.service';
import { UserService } from '../services/user.service';

describe('BeerDetailComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ClarityModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        BeerDetailComponent
      ],
      providers: [
        UserService,
        BeerService
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BeerDetailComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
