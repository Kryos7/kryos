import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './a_pages/homepage/homepage.component';

import { HomeEsportComponent } from './a_pages/home-esport/home-esport.component';
import { BlogEsportComponent } from './a_pages/home-esport/blog-esport/blog-esport.component';
import { RulesComponent } from './a_pages/home-esport/rules/rules.component';
import { RankingComponent } from './a_pages/home-esport/ranking/ranking.component';
import { TeamsComponent } from './a_pages/home-esport/teams/teams.component';
import { PastEventsComponent } from './a_pages/home-esport/past-events/past-events.component';

import { SignUpToEventComponent } from './a_pages/sign-up-to-event/sign-up-to-event.component';
import { ProfileComponent } from './a_pages/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  {
    path: ':esport', component: HomeEsportComponent,
    children: [
      {
        path: '', component: BlogEsportComponent, data: { breadcrumb: { info: 'blog', alias: '', disable: true } }
      },
      { path: 'regolamento/:event', component: RulesComponent, data: { breadcrumb: 'regolamento' } },
      { path: 'classifica/:event', component: RankingComponent, data: { breadcrumb: 'classifica' } },
      { path: 'squadre/:event', component: TeamsComponent, data: { breadcrumb: 'squadre' } },
      { path: 'edizioni-passate/:event', component: PastEventsComponent, data: { breadcrumb: 'edizioni-passate' } },
      { path: 'iscriviti', component: SignUpToEventComponent, data: { breadcrumb: 'iscriviti' } },
    ]
  },
  { path: 'profile', component: ProfileComponent, data: { breadcrumb: 'ciao' } },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
