import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MainPageComponent } from './main-page/main-page.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { SearchPageComponent } from './search-page/search-page.component';
import { CookieService } from 'ngx-cookie-service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    MainPageComponent,
    SearchPageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: MainPageComponent},
      {path: 'login', component: LoginComponent},
      {path: 'registration', component: RegistrationComponent},
      {path: 'search', component: SearchPageComponent}
    ]),
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
