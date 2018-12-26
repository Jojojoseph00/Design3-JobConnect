import { Injectable } from '@angular/core';
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

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  profilesCol: AngularFirestoreCollection<Profile>;
  profiles: any;

  fname: string;
  lname: string;
  dob: string;
  info: string;

  profileDoc: AngularFirestoreDocument<Profile>;
  profile: Observable<Profile>;

  constructor(private afs: AngularFirestore) {}


  ngOnInit(){    
    this.profilesCol = this.afs.collection('profiles', ref => ref.where('fname', '==', 'Ye Yint'));    
    this.profiles = this.profilesCol.valueChanges();
  }

  getPost(){    
    this.profilesCol = this.afs.collection('profiles', ref => ref.where('fname', '==', 'Ye Yint'));    
    this.profiles = this.profilesCol.valueChanges();
  }

}
