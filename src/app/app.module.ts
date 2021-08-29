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
import { CardsComponent } from './cards/cards.component';
import { FriendItemComponent } from './friend-item/friend-item.component';

import { AuthService } from "./Services/auth.service";
import { GamesService } from "./Services/games.service";
import { FriendsService } from "./Services/friends.service";
import { ProfileService } from "./Services/profile.service"

import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSliderModule } from "@angular/material/slider";
import { ApiInterceptor } from "./Interceptor/api.interceptor";

const appRoute: Routes =[
  {path:'games', component: GamesComponent},
  {path:'library', component: LibraryComponent},
  {path:'friends', component: FriendsComponent},
  {path:'profile', component: ProfileComponent},
  {path:'auth', component: AuthComponent},
  {path:'reg', component: RegComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegComponent,
    AuthComponent,
    ProfileComponent,
    LibraryComponent,
    FriendsComponent,
    GamesComponent,
    CardsComponent,
    FriendItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCheckboxModule,
    MatSliderModule,
 ],
  providers: [AuthService, GamesService, FriendsService, ProfileService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
