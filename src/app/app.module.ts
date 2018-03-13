import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
//Router Module
import { routing } from './app.routing';
//App Modules
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/index';
import { AuthenticationService, UserService, PayerService } from './services/index';
import { LoginComponent } from './components/login/index';
import { HomeComponent } from './components/home/index';

//Material Module
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {MdButtonModule, MdCheckboxModule,MdCardModule,MdMenuModule,MdToolbarModule,MdIconModule,MdProgressSpinnerModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      routing
  //    BrowserAnimationsModule,
    //  MdButtonModule, MdCheckboxModule,MdCardModule,MdMenuModule,MdToolbarModule,MdIconModule,MdProgressSpinnerModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    PayerService,
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
