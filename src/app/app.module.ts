import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';
import { EmployerComponent } from './employer/employer.component';
import { StudentComponent } from './student/student.component';
import { JobpostComponent } from './jobpost/jobpost.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';


var firebaseConfig = {
  apiKey: "AIzaSyBVuSFduxGn2LTVSJcm06wwkabdNR8W8_k",
  authDomain: "firestore-637f9.firebaseapp.com",
  databaseURL: "https://firestore.firebaseio.com",
  projectId: "firestore-637f9"

};

@NgModule({
  declarations: [
    AppComponent
    EmployerComponent,
    StudentComponent,
    JobpostComponent,
    StudentprofileComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'employer', component: EmployerComponent},
      {path: 'student', component: StudentComponent},
      {path: 'jobpost', component: JobpostComponent},
      {path: 'studentprofile', component: StudentprofileComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
