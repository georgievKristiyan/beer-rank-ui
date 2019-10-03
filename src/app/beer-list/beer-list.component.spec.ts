import { TestBed, async } from '@angular/core/testing';
import { ClarityModule } from '@clr/angular';

import { BeerListComponent } from './beer-list.component';

describe('BeerListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ClarityModule
      ],
      declarations: [
        BeerListComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BeerListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
