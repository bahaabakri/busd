import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnersRouterModule } from './partners-router.module';
import { MainPartnersComponent } from './main-partners/main-partners.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReduceStringSize } from 'src/_pipes/reduce-string-size';
import { MatTableModule } from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    MainPartnersComponent
  ],
  imports: [
    CommonModule,
    PartnersRouterModule,
    SharedModule,
    FormsModule,
    // Material Modules
    MatTableModule,
    // Fontawesome
    FontAwesomeModule,
    
  ],
  providers: [ReduceStringSize]
})
export class PartnersModule { }
