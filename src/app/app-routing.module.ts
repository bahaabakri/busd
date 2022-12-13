import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component'
import { MainPagesComponent } from './pages/components/main-pages/main-pages.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
  path: 'pages',
  component:MainPagesComponent,
  children: [
    {path:'', redirectTo:'dashboard', pathMatch: 'full'},
    { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: 'info', loadChildren: () => import('./pages/information/information.module').then(m => m.InformationModule) },
    { path: 'links', loadChildren: () => import('./pages/links/links.module').then(m => m.LinksModule) },
    { path: 'partners', loadChildren: () => import('./pages/partners/partners.module').then(m => m.PartnersModule) },
    { path: 'promo', loadChildren: () => import('./pages/promo/promo.module').then(m => m.PromoModule) },
    { path: 'stats', loadChildren: () => import('./pages/stats/stats.module').then(m => m.StatsModule) },
    { path: 'tbots', loadChildren: () => import('./pages/telegram-bots/telegram-bots.module').then(m => m.TelegramBotsModule) },
  ]
},
{
  path: 'notFoundPage',
  component: NotFoundComponent
},
{
  path: '**',
  redirectTo: '/notFoundPage'
},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
