import { Injectable } from '@angular/core';
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult, Auth, signOut, UserCredential } from '@angular/fire/auth';
import { Firestore, collection, getDoc, addDoc, setDoc, doc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { CommonService } from '../common/common.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth: Auth
  googleAuthProvider: GoogleAuthProvider

  constructor(private authh: Auth, private firestore: Firestore, private commonService: CommonService, private router: Router) {
    this.auth = getAuth()
    this.googleAuthProvider = new GoogleAuthProvider()
  }

  async uploadUserInfo() {
    const docRef = doc(this.firestore, 'users', this.commonService.user!.uid)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      this.commonService.fireStoreUser = docSnap.data()
      console.log(docSnap.data())
      return
    }
    const docData = {
      displayName: this.commonService.user?.displayName,
      email: this.commonService.user?.email,
      uid: this.commonService.user?.uid,
      balance: 0,
      totalSpent: 0
    }
    await setDoc(docRef, docData)
      .then((sucess) => {
        this.commonService.fireStoreUser = docData
      }).catch((error) => {
        console.log(error)
      })
  }

  async getFireStoreUserData() {
    const docRef = doc(this.firestore, 'users', this.commonService.user!.uid)
    const docSnap = await getDoc(docRef)
    return docSnap.data()
  }

  async payToShop(id: string, fare: string) {
    const docRef = doc(this.firestore, 'shops', id)
    const docSnap = await getDoc(docRef)
    if (!docSnap.exists()) throw new Error("Shop doesn't exit")
    //transfer money from user to shop
  }

  async signIn(): Promise<never> {
    return await signInWithRedirect(this.auth, this.googleAuthProvider);
  }

  async getRedirectResult(): Promise<UserCredential | null> {
    return await getRedirectResult(this.auth);
  }

  signOut() {
    this.commonService.user = undefined
    localStorage.removeItem('user')
    this.router.navigate(['fare/login'])
    signOut(this.auth)
  }

}
