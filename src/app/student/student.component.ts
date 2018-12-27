import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs'
import 'rxjs';
import { StudentprofileComponent } from '../studentprofile/studentprofile.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../core/auth.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

interface Post {

  //id: string; 
  title: string;
  content: string;
  location: string;
}

interface Application {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  favoriteColor?: string;
  usertype: string;
  dob: string;
  info: string;  
}


/*interface Profile {
  fname: string;
  lname: string;
  dob: string;
  info: string;
}*/
//interface PostId extends Post { 
//  id: string; 
//}

/*interface ProfileId extends Profile { 
  id: string; 
}*/

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  closeResult: string;
  
  postsCol: AngularFirestoreCollection<any>;
  postDoc:   AngularFirestoreDocument<any>;

  
  posts: any;

  title: string;
  content: string;
  location: string;

  applicationCol: AngularFirestoreCollection<Application>;
  applications: any; 

  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  favoriteColor?: string;
  usertype: string;
  dob: string;
  info: string;  


  applicationDoc: AngularFirestoreDocument<Application>;
  application: Observable<Application>;



  //postDoc: AngularFirestoreDocument<Post>;
  //post: Observable<Post>;

 // profilesCol: AngularFirestoreCollection<Profile>;
 // profiles: any;

  //fname: string;
  //lname: string;
 // dob: string;
  //info: string;

  //profileDoc: AngularFirestoreDocument<Profile>;
  //profile: Observable<Profile>;

  constructor(private afs: AngularFirestore, public auth: AuthService, private modalService: NgbModal) {
    
  }


  ngOnInit() {
    this.postsCol = this.afs.collection('posts');    
    this.posts = this.postsCol.valueChanges();
    this.applicationCol = this.afs.collection('application');
    this.applications = this.applicationCol.valueChanges();
    
    
    
  }
  addPost() {
    this.afs.collection('posts').add({'title': this.title, 'content': this.content, 'location': this.location});
  }

  //getPost() {
    //this.profilesCol = this.afs.collection('profiles', ref => ref.where('fname', '==', 'Ye Yint'));
    //this.profiles = this.profilesCol.valueChanges();
  //}

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  
  

}
