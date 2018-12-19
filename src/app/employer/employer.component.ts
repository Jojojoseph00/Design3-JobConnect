import { Component, OnInit } from '@angular/core';
import { StudentprofileComponent } from '../studentprofile/studentprofile.component';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs'
import 'rxjs';


interface Post {
  title: string;
  content: string;
  location: string;
}

interface Profile {
  fname: string;
  lname: string;
  dob: Date;
  info: string;
}

interface Application {
  title: string;
  content: string;
  location: string;
}

interface ProfileId extends Profile { 
  id: string; 
}


@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {

  postsCol: AngularFirestoreCollection<Post>;
  posts: any;
  
  title: string;
  content: string;
  location: string;

  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;

  profilesCol: AngularFirestoreCollection<Profile>;
  profiles: any;

  fname: string;
  lname: string;
  dob: Date;
  info: string;

  profileDoc: AngularFirestoreDocument<Profile>;
  profile: Observable<Profile>;

  applicationCol: AngularFirestoreCollection<Application>;
  applications: any;

  


  applicationDoc: AngularFirestoreDocument<Application>;
  application: Observable<Application>;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.postsCol = this.afs.collection('posts');
    this.profilesCol = this.afs.collection('profiles');
    this.posts = this.postsCol.valueChanges();
    this.profiles = this.profilesCol.valueChanges();
    this.applicationCol = this.afs.collection('profiles');
    this.applications = this.applicationCol.valueChanges();
    
  }


  addPost2() {
    
    this.afs.collection('profiles').doc('robert-cook').set({'fname': this.fname, 'lname': this.lname, 'dob': this.dob, 'info': this.info});
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

}