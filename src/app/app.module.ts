import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';
import { EmployerComponent } from './employer/employer.component';
import { StudentComponent } from './student/student.component';
import { JobpostComponent } from './jobpost/jobpost.component';
import { AuthService } from './core/auth.service';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { ApplicationService } from './application.service';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { LoginFormComponent } from './users/login-form/login-form.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import { NgbdModalBasic} from './employer/employer.component';



var firebaseConfig = {
  apiKey: "AIzaSyBVuSFduxGn2LTVSJcm06wwkabdNR8W8_k",
  authDomain: "firestore-637f9.firebaseapp.com",
  databaseURL: "https://firestore.firebaseio.com",
  projectId: "firestore-637f9"

};

@NgModule({
  declarations: [
   
    AppComponent,
    EmployerComponent,
    StudentComponent,
    JobpostComponent,
    StudentprofileComponent,
    UserLoginComponent,
    UserProfileComponent,
    LoginFormComponent,
    UserFormComponent
    //NgbdModalBasic
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: 'employer', component: EmployerComponent},
      {path: 'user-profile', component: UserProfileComponent},
      {path: 'student', component: StudentComponent},
      {path: 'jobpost', component: JobpostComponent},
      {path: 'studentprofile', component: StudentprofileComponent}
    ])
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
