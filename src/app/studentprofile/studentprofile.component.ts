import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs'
import 'rxjs';
import { UploadComponent } from '../upload/upload.component';
import { AuthService } from '../core/auth.service';
import { finalize } from 'rxjs/operators';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



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
rangeValue: any;

  profilesCol: AngularFirestoreCollection<Profile>;
  profiles: any;

  fname: string;
  lname: string;
  dob: Date;
  info: string;

  postDoc: AngularFirestoreDocument<Profile>;
  post: Observable<Profile>;
  closeResult: string;

  constructor(private afs: AngularFirestore, 
    private modalService: NgbModal,
     public auth: AuthService, 
     public file: UploadComponent) {}

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






