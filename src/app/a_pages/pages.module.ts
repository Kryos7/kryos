import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../b_shared/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BreadcrumbModule } from 'xng-breadcrumb';
import { LayoutModule } from '../c_layout/layout.module';
import { SharedModule } from '../b_shared/shared.module';

import { HomepageComponent } from './homepage/homepage.component';
import { HomeEsportComponent } from './home-esport/home-esport.component';
import { MenuEsportComponent } from './home-esport/menu-esport/menu-esport.component';
import { BlogEsportComponent } from './home-esport/blog-esport/blog-esport.component';
import { RulesComponent } from './home-esport/rules/rules.component';
import { TeamsComponent } from './home-esport/teams/teams.component';
import { RankingComponent } from './home-esport/ranking/ranking.component';
import { PastEventsComponent } from './home-esport/past-events/past-events.component';

import { SignUpToEventComponent } from './sign-up-to-event/sign-up-to-event.component';

import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FontAwesomeModule,
    LayoutModule,
    SharedModule,
    BreadcrumbModule
  ],
  declarations: [
    HomepageComponent,
    HomeEsportComponent,
    MenuEsportComponent,
    BlogEsportComponent,
    RulesComponent,
    TeamsComponent,
    RankingComponent,
    PastEventsComponent,
    SignUpToEventComponent,
    ProfileComponent
  ],
  exports: [
    MenuEsportComponent,
    BlogEsportComponent
  ]
})
export class PagesModule { }
