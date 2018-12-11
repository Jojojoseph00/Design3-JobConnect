import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs'
import 'rxjs';

interface Profile {
  fname: string;
  lname: string;
  dob: Date;
  info: string;
}

interface ProfileId extends Profile { 
  id: string; 
}

@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.css']
})
export class StudentprofileComponent implements OnInit {

  profilesCol: AngularFirestoreCollection<Profile>;
  profiles: any;

  fname: string;
  lname: string;
  dob: Date;
  info: string;

  postDoc: AngularFirestoreDocument<Profile>;
  post: Observable<Profile>;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.profilesCol = this.afs.collection('profiles');
    this.profiles = this.profilesCol.valueChanges();
  }
  addPost2() {
    this.afs.collection('profiles').doc('robert-cook').set({'fname': this.fname, 'lname': this.lname, 'dob': this.dob, 'info': this.info});
  }

  getPost(postId) {
    this.postDoc = this.afs.doc('profiles/'+postId);
    this.post = this.postDoc.valueChanges();
  }


  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  

}