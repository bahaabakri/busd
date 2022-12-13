import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkRouterModule } from './links-router.module';
import { MainLinksComponent } from './main-links/main-links.component';



@NgModule({
  declarations: [
    MainLinksComponent
  ],
  imports: [
    CommonModule,
    LinkRouterModule
  ]
})
export class LinksModule { }
