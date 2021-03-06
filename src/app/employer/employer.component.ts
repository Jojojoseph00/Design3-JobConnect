import { Component, OnInit } from '@angular/core';
import { StudentprofileComponent } from '../studentprofile/studentprofile.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs'
import 'rxjs';
import { AuthService } from '../core/auth.service';


interface Post {
  title: string;
  content: string;
  location: string;
}



interface Application {
  title: string;
  content: string;
  location: string;
}




@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {

  closeResult: string;
  postsCol: AngularFirestoreCollection<Post>;
  posts: any;
  
  title: string;
  content: string;
  location: string;

  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;


  applicationCol: AngularFirestoreCollection<Application>;
  applications: any; 


  applicationDoc: AngularFirestoreDocument<Application>;
  application: Observable<Application>;

  constructor(private afs: AngularFirestore, private modalService: NgbModal, public auth: AuthService) {}

  ngOnInit() {
    this.postsCol = this.afs.collection('posts');
    this.posts = this.postsCol.valueChanges();
    this.applicationCol = this.afs.collection('profiles');
    this.applications = this.applicationCol.valueChanges();
    
  }

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