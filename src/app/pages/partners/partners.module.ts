import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnersRouterModule } from './partners-router.module';
import { MainPartnersComponent } from './main-partners/main-partners.component';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    MainPartnersComponent
  ],
  imports: [
    CommonModule,
    PartnersRouterModule,
    // Material Modules
    MatTableModule,
    MatInputModule,
    MatButtonModule
    
  ]
})
export class PartnersModule { }
