import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule
    ],
    exports: [
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule
    ]
})
export class MaterialModule {}