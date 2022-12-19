import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkRouterModule } from './links-router.module';
import { MainLinksComponent } from './main-links/main-links.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    MainLinksComponent
  ],
  imports: [
    CommonModule,
    LinkRouterModule,
    SharedModule,
    FontAwesomeModule,
    NgbToastModule
  ]
})
export class LinksModule { }
