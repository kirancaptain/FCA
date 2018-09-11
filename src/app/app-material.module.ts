import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCheckboxModule,
  MatAutocompleteModule, MatToolbarModule,
  MatIconModule, MatInputModule,
  MatFormFieldModule, MatTooltipModule,
  MatSnackBarModule, MatCardModule, MatGridListModule, MatTabsModule, MatProgressBarModule, MatListModule, MatChipsModule, MatMenuModule
} from '@angular/material';
@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule, MatAutocompleteModule, MatToolbarModule, MatIconModule,
    MatInputModule, MatFormFieldModule, MatTooltipModule, MatSnackBarModule, MatCardModule,
    MatGridListModule, MatTabsModule, MatProgressBarModule, MatListModule, MatChipsModule, MatMenuModule
  ],
  declarations: [],
  exports: [
    MatButtonModule,
    MatCheckboxModule, MatAutocompleteModule, MatToolbarModule, MatIconModule,
    MatInputModule, MatFormFieldModule, MatTooltipModule, MatSnackBarModule, MatCardModule,
    MatGridListModule, MatTabsModule,  MatProgressBarModule, MatListModule, MatChipsModule, MatMenuModule
  ]
})
export class MaterialModule { }
