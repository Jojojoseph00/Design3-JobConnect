import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs'
import 'rxjs';


interface Profile {
  fname: string;
  lname: string;
  dob: string;
  info: string;
}


interface ProfileId extends Profile { 
  id: string; 
}

@Component({
  selector: 'app-jobpost',
  templateUrl: './jobpost.component.html',
  styleUrls: ['./jobpost.component.css']
})
export class JobpostComponent implements OnInit {

  profilesCol: AngularFirestoreCollection<Profile>;
  profiles: any;

  fname: string;
  lname: string;
  dob: string;
  info: string;

  profileDoc: AngularFirestoreDocument<Profile>;
  profile: Observable<Profile>;

  constructor(private applicationService:ApplicationService) {}

  ngOnInit() {
    
  }
  getData(){
    
  }

}
