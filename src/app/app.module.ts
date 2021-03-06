import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  AngularFireStorage,  AngularFireUploadTask} from '@angular/fire/storage';
import {RouterModule, Routes} from '@angular/router';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';
import { EmployerComponent } from './employer/employer.component';
import { StudentComponent } from './student/student.component';
// import { JobpostComponent } from './jobpost/jobpost.component';
import { AuthService } from './core/auth.service';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { ApplicationService } from './application.service';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { LoginFormComponent } from './users/login-form/login-form.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UploadComponent } from './upload/upload.component';
import { FileSizePipe } from './upload/file-size.pipe';
import { DropZoneDirective } from './upload/drop-zone.directive';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import { UiModule } from './ui/ui.module';
//import { NgbdModalBasic} from './employer/employer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { IntroComponent } from './intro/intro.component';
// import { EmployerApplicantsComponent } from './employer-applicants/employer-applicants.component';
// import { EmployerHeadhuntComponent } from './employer-headhunt/employer-headhunt.component'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

var firebaseConfig = {
  apiKey: "AIzaSyBVuSFduxGn2LTVSJcm06wwkabdNR8W8_k",
  authDomain: "firestore-637f9.firebaseapp.com",
  databaseURL: "https://firestore.firebaseio.com",
  storageBucket: "firestore-637f9.appspot.com",
  projectId: "firestore-637f9"

};



@NgModule({

  declarations: [
   
    AppComponent,
    EmployerComponent,
    StudentComponent,
    // JobpostComponent,
    StudentprofileComponent,
    UserLoginComponent,
    UserProfileComponent,
    LoginFormComponent,
    UserFormComponent,
    UploadComponent,
    FileSizePipe,
    DropZoneDirective
  ],
  imports: [
    FormsModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    CoreModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    MatButtonModule, 
    MatCheckboxModule,
    MatSliderModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'user-profile', pathMatch: 'full'},
      {path: 'employer', component: EmployerComponent},
      {path: 'user-profile', component: UserProfileComponent,},
      {path: 'student', component: StudentComponent},
      {path: 'user-login', component: UserProfileComponent},
      {path: 'studentprofile', component: StudentprofileComponent},
      {path: 'upload', component: UploadComponent}
    ])
  ],
  providers: [
    AuthService,
    AngularFireStorage,
    AngularFirestoreModule,
    UploadComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
