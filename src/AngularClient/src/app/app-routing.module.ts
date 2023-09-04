import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MsalGuard } from '@azure/msal-angular';
import { GamePlayComponent } from './game-play/game-play.component';
import { RoleGuard } from './services/role-guard';

const gamesModule = () => import('./games/games.module').then(x => x.GamesModule);

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [MsalGuard]
  },
  {
    path: 'game-play/:id',
    component: GamePlayComponent
  },
  { 
    path: 'games', 
    loadChildren: gamesModule,
    data: {
      roles: [ 'game.manage' ]
    },
    canActivate: [ MsalGuard, RoleGuard ] },
  {
    path: '',
    component: HomeComponent
  },
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: !isIframe ? 'enabledBlocking' : 'disabled' // Don't perform initial navigation in iframes
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }