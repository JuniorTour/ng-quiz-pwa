import { NgModule } from '@angular/core';

// TODO: Clean Unnecessary Module
import {
  MatSidenavModule,
  MatListModule,
  MatTabsModule,
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  MatRadioModule,
  MatGridListModule,
  MatInputModule,
  MatIconModule,
  MatChipsModule,
  MatMenuModule,
  MatSelectModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
    imports: [
      MatSidenavModule,
      MatListModule,
      MatTabsModule,
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatCardModule,
      MatRadioModule,
      MatGridListModule,
      MatInputModule,
      MatIconModule,
      MatChipsModule,
      MatMenuModule,
      MatSelectModule,
      MatProgressSpinnerModule
    ],
    exports: [
      MatSidenavModule,
      MatListModule,
      MatTabsModule,
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatCardModule,
      MatRadioModule,
      MatGridListModule,
      MatInputModule,
      MatIconModule,
      MatChipsModule,
      MatMenuModule,
      MatSelectModule,
      MatProgressSpinnerModule
    ]
})
export class CustMatModule { }
