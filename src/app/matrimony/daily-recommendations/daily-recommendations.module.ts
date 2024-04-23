import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyRecommendationsRoutingModule } from './daily-recommendations-routing.module';
import { DailyRecommendationsComponent } from './daily-recommendations/daily-recommendations.component';
import { HammerModule } from '@angular/platform-browser';
import { MatModule } from 'src/app/shared/mat/mat.module';


@NgModule({
  declarations: [
    DailyRecommendationsComponent
  ],
  imports: [
    CommonModule,
    DailyRecommendationsRoutingModule,
    HammerModule,
    MatModule
  ]
})
export class DailyRecommendationsModule { }
