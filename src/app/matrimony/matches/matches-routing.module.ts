import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyMatchesComponent } from './my-matches/my-matches.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [
  {
    path: '',
    component: MyMatchesComponent
  },
  {
    path: 'profile',
    component: ViewProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchesRoutingModule { }
