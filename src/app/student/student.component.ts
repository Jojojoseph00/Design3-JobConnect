import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs'
import 'rxjs';
import { StudentprofileComponent } from '../studentprofile/studentprofile.component';
import { AuthService } from '../core/auth.service';

interface Post {
  title: string;
  content: string;
  location: string;
}

interface Profile {
  fname: string;
  lname: string;
  dob: string;
  info: string;
}
interface PostId extends Post { 
  id: string; 
}

interface ProfileId extends Profile { 
  id: string; 
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

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
  dob: string;
  info: string;

  profileDoc: AngularFirestoreDocument<Profile>;
  profile: Observable<Profile>;

  constructor(private afs: AngularFirestore, public auth: AuthService) {}
  

  ngOnInit() {
    this.postsCol = this.afs.collection('posts');    
    this.posts = this.postsCol.valueChanges();
    
    
    
  }
  addPost() {
    this.afs.collection('posts').add({'title': this.title, 'content': this.content, 'location': this.location});
  }

  getPost() {
    this.profilesCol = this.afs.collection('profiles', ref => ref.where('fname', '==', 'Ye Yint'));
    this.profiles = this.profilesCol.valueChanges();
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  
  

}
