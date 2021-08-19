import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegComponent } from './reg/reg.component';
import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';
import { LibraryComponent } from './library/library.component';
import { FriendsComponent } from './friends/friends.component';
import { GamesComponent } from './games/games.component';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CheckFormService } from './check-form.service'

const appRoute: Routes =[
  {path:'', component: GamesComponent},
  {path:'library', component: LibraryComponent},
  {path:'friends', component: FriendsComponent},
  {path:'profile', component: ProfileComponent},
  {path:'auth', component: AuthComponent},
  {path:'reg', component: RegComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegComponent,
    AuthComponent,
    ProfileComponent,
    LibraryComponent,
    FriendsComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CheckFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
