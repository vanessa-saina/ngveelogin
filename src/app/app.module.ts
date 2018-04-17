import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import {HttpModule} from '@angular/http'
//Router Module
import { routing } from './app.routing';
//App Modules
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/index';
import { AuthenticationService, UserService, PayerService, StudentsService, LecturerService, AdminService } from './services/index';
import { LoginComponent } from './components/login/index';
import { HomeComponent } from './components/home/index';
import { LecturerComponent } from './components/lecturer/index';
import { AdminComponent } from './components/admin/index';
import { StudentsComponent } from './components/students/index';

//Material Module
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {MdButtonModule, MdCheckboxModule,MdCardModule,MdMenuModule,MdToolbarModule,MdIconModule,MdProgressSpinnerModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LecturerComponent,
    AdminComponent,
    StudentsComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      routing
  //    BrowserAnimationsModule,
    //  MdButtonModule, MdCheckboxModule,MdCardModule,MdMenuModule,MdToolbarModule,MdIconModule,MdProgressSpinnerModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    PayerService,
    StudentsService,
    LecturerService,
    AdminService,
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
