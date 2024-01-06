import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { BreadcrumbModule } from 'xng-breadcrumb';

// CUSTOM MODULES
import { PagesModule } from './a_pages/pages.module';
import { SharedModule } from './b_shared/shared.module';
import { MaterialModule } from './b_shared/material.module';
import { LayoutModule } from './c_layout/layout.module';
import { AuthModule } from './d_auth/auth.module';

import { ELOService } from './e_core/services/elo.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BreadcrumbModule,
    // CUSTOM MODULES
    PagesModule,
    SharedModule,
    MaterialModule,
    LayoutModule,
    AuthModule
  ],
  providers: [
    ELOService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
