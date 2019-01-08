import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs'
import 'rxjs';
import { UploadComponent } from '../upload/upload.component';
import { AuthService } from '../core/auth.service';
import { finalize } from 'rxjs/operators';
import { Options } from 'ng5-slider';
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
  templateUrl: './studentprofile.component.html'
})

@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.css']
})
export class StudentprofileComponent implements OnInit {
  value: number = 5;
  options: Options = {
    floor: 0,
    ceil: 10,
    step: 1,
    showTicks: true,
    showTicksValues: true
  };
  profilesCol: AngularFirestoreCollection<Profile>;
  profiles: any;
  fname: string;
  lname: string;
  dob: Date;
  info: string;

  postDoc: AngularFirestoreDocument<Profile>;
  post: Observable<Profile>;

  constructor(private afs: AngularFirestore, public auth: AuthService, public file: UploadComponent) {}

  ngOnInit() {
    this.profilesCol = this.afs.collection('profiles');
    this.profiles = this.profilesCol.valueChanges();
    
    
  }
  addPost2() {
    this.afs.collection('profiles').doc('robert-cook').set({'fname': this.fname, 'lname': this.lname, 'dob': this.dob, 'info': this.info});
  }
  addPost3() {
    this.afs.collection('application').doc('robert-cook').set({'fname': this.fname, 'lname': this.lname, 'dob': this.dob, 'info': this.info});
  }


  

  /*getPost(postId) {
    this.postDoc = this.afs.doc('profiles/'+postId);
    this.post = this.postDoc.valueChanges();

    
  }*/


  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  

}