import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchesRoutingModule } from './matches-routing.module';
import { MyMatchesComponent } from './my-matches/my-matches.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatModule } from 'src/app/shared/mat/mat.module';


@NgModule({
  declarations: [
    MyMatchesComponent,
    ViewProfileComponent
  ],
  imports: [
    CommonModule,
    MatchesRoutingModule,
    CarouselModule,
    MatModule
  ]
})
export class MatchesModule { }
