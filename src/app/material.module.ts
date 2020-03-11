import { NgModule } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule
  ],
  exports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule
  ]
})
export class MaterialModule {}
