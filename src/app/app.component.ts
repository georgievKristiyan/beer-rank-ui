import { Component } from '@angular/core';
import { ClarityIcons } from '@clr/icons';
import { ClrShapeStar } from '@clr/icons/shapes/social-shapes';

ClarityIcons.add({
  star: ClrShapeStar
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }
