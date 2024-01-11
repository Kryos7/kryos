import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFileUploadModule } from 'angular-material-fileupload';

@NgModule({
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatToolbarModule,
    MatFileUploadModule
  ],
  declarations: [
    
  ],
  exports: [
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatToolbarModule,
    MatFileUploadModule
  ]
})
export class MaterialModule { }
