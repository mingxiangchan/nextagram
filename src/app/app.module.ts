import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { UserListComponent } from './user-list/user-list.component'
import { AppRoutingModule } from './app-routing.module'
import { UserImagesComponent } from './user-images/user-images.component'
import { HomePageComponent } from './home-page/home-page.component'
import { UserProfileComponent } from './user-profile/user-profile.component'
import { LoginModalComponent } from './login-modal/login-modal.component'
import { SignupModalComponent } from './signup-modal/signup-modal.component'
import { NavbarComponent } from './navbar/navbar.component';
import { ChatboxComponent } from './chatbox/chatbox.component'

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserImagesComponent,
    HomePageComponent,
    UserProfileComponent,
    LoginModalComponent,
    SignupModalComponent,
    NavbarComponent,
    ChatboxComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
