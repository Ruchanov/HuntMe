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
import { CookieService } from "ngx-cookie-service";
import { NavbarComponent } from './navbar/navbar.component';
import { ApplyComponent } from './apply/apply.component';
import { VacancyDetailComponent } from './vacancy-detail/vacancy-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    MainPageComponent,
    SearchPageComponent,
    NavbarComponent,
    ApplyComponent,
    VacancyDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: MainPageComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegistrationComponent},
      {path: 'search', component: SearchPageComponent},
      {path: 'vacancy/:id', component: VacancyDetailComponent},
      {path: 'apply', component: ApplyComponent}
    ]),
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
