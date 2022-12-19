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
import { RegistrationComponent } from './auth/registration/registration.component';
import { HomeNavbarComponent } from './home/home-navbar/home-navbar.component';
import { HttpClientModule } from '@angular/common/http';


import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyD32mgYgJOofa8n3ip9oKebRrdocMvT7QM",
  authDomain: "wallet-a2a15.firebaseapp.com",
  projectId: "wallet-a2a15",
  storageBucket: "wallet-a2a15.appspot.com",
  messagingSenderId: "663347752274",
  appId: "1:663347752274:web:f82784d3b878fe3e505e8b",
  measurementId: "G-W2WS2XCL3D"
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    MainPagesComponent,
    SideMenuComponent,
    RegistrationComponent,
    HomeNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    // Pages
    DashboardModule,
    InformationModule,
    LinksModule,
    PartnersModule,
    PromoModule,
    StatsModule,
    TelegramBotsModule,
    
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    

  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
