import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap} from 'rxjs/operators';

import { NotifyService } from './notify.service';

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  favoriteColor?: string;
  usertype: string;
  dob: string;
  info: string;
  

}



@Injectable({ providedIn: 'root' })
export class AuthService {

  user: Observable<User>;
  newUser = true;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    //private notify: NotifyService
  ) {

      //// Get auth data, then get firestore user document || null
      this.user = this.afAuth.authState.pipe(
        switchMap(user => {
          if (user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
          } else {
            return of(null)
          }
        })
      )
    }

  googleLogin() {
    const provider = new auth.GoogleAuthProvider()
    return this.oAuthLogin(provider);
  }
  

    //// Email/Password Auth ////

     emailSignUp(email: string, password: string) {
      return this.afAuth.auth
        .createUserWithEmailAndPassword(email, password)
        .then(credential => {
          //this.notify.update('Welcome new user!', 'success');
          this.updateUserData(credential.user); // if using firestore
        })
        .catch(error => this.handleError(error));
    }
  
    emailLogin(email: string, password: string) {
      return this.afAuth.auth
        .signInWithEmailAndPassword(email, password)
        .then(credential => {
          //this.notify.update('Welcome back!', 'success');
          this.updateUserData(credential.user);
        })
        .catch(error => this.handleError(error));
    }
  
    // Sends email allowing user to reset password
    resetPassword(email: string) {
      const fbAuth = auth();
  
      return fbAuth
        .sendPasswordResetEmail(email)
        //.then(() => this.notify.update('Password update email sent', 'info'))
        .catch(error => this.handleError(error));
    }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user)
      })
  }


  private updateUserData(user) {
    // Sets user data to firestore on login

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      usertype: user.usertype,
      dob: user.dob,
      info: user.info

    }

    return userRef.set(data, { merge: true })

  }


  private updateUserDat2(user) {
    // Sets user data to firestore on login

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      usertype: user.usertype,
      dob: user.dob,
      info: user.info
      

    }

    return userRef.set(data, { merge: true })

  }

    // If error, console log and notify user
    private handleError(error: Error) {
      console.error(error);
     //this.notify.update(error.message, 'error');
    }


  signOut() {
    this.afAuth.auth.signOut().then(() => {
        this.router.navigate(['/user-profile']);
    });
  }

  redirect(user){
  
    if (user.usertype == "employee") {
      this.router.navigate(['/student']);
    } else {
      this.router.navigate(['/employer']);
    }    

    
  }
  jobApplication(user){   
    
    //this.afs.collection('application').doc(user.uid).set({'displayName': user.displayName, 'dob': user.dob, 'email': user.email})   
    const userRef2: AngularFirestoreDocument<any> = this.afs.doc(`application/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      usertype: user.usertype,
      dob: user.dob,
      info: user.info

    }

    return userRef2.set(data, { merge: true }) 

  }

}
