import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule,
  MatInputModule, MatListModule, MatGridListModule, MatSidenavModule, MatDialogModule, } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatGridListModule,
    MatSidenavModule,
    MatDialogModule,
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatGridListModule,
    MatSidenavModule,
    MatDialogModule,
  ],
  declarations: []
})
export class SharedModule { }
