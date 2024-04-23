import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyRecommendationsComponent } from './daily-recommendations/daily-recommendations.component';
import { ViewProfileComponent } from '../matches/view-profile/view-profile.component';

const routes: Routes = [
  {
    path: '',
    component: DailyRecommendationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyRecommendationsRoutingModule { }
