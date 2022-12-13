import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReduceStringSize } from 'src/_pipes/reduce-string-size';
import { HomeComponent } from './home/home.component';
import { MainPagesComponent } from './pages/components/main-pages/main-pages.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { InformationModule } from './pages/information/information.module';
import { LinksModule } from './pages/links/links.module';
import { PartnersModule } from './pages/partners/partners.module';
import { PromoModule } from './pages/promo/promo.module';
import { StatsModule } from './pages/stats/stats.module';
import { TelegramBotsModule } from './pages/telegram-bots/telegram-bots.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { SideMenuComponent } from './pages/components/main-pages/side-menu/side-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    MainPagesComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgbModule,
    // Pages
    DashboardModule,
    InformationModule,
    LinksModule,
    PartnersModule,
    PromoModule,
    StatsModule,
    TelegramBotsModule,
    

  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
