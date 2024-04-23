import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileResolverService } from '../shared/service/profile-resolver.service';

const routes: Routes = [
  {
    path: 'profiles',
    loadChildren: () => import('./matches/matches.module').then(m => m.MatchesModule),
    resolve: { userProfiles: ProfileResolverService }
  },
  {
    path: 'daily-recomendation',
    loadChildren: () => import('./daily-recommendations/daily-recommendations.module').then(m => m.DailyRecommendationsModule),
    resolve: { userProfiles: ProfileResolverService }
  },
  { path: '', redirectTo: '/profiles', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatrimonyRoutingModule { }
