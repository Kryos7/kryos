import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountdownModule } from 'ngx-countdown';

import { SidebarComponent } from './sidebar/sidebar.component';
import { PieChartOpComponent } from './pie-chart-op/pie-chart-op.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CountdownModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    SidebarComponent,
    PieChartOpComponent
  ],
  exports: [
    SidebarComponent,
    PieChartOpComponent
  ]
})
export class SharedModule { }
