import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { RedirectComponent } from './redirect/redirect.component';
import { MainComponent } from './main/main.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { AuthGuard } from './auth.guard';

    const routes: Routes = [
        { path: '', component: MainComponent},
        { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
        { path: 'logout', component: LogoutComponent},
        { path: 'callback', component: RedirectComponent},
        { path: '**', component: PagenotfoundComponent}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
