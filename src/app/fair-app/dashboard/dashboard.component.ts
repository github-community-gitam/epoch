import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { DocumentData } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { CommonService } from '../services/common/common.service';
import { FirebaseService } from '../services/firebase/firebase.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private firebaseService: FirebaseService, private commonService: CommonService) { }

  user: User | undefined
  fireStoreUser: DocumentData | undefined

  ngOnInit(): void {
    this.user = this.commonService.user
    this.getSetData()
  }

  async getSetData() {
    await this.firebaseService.uploadUserInfo()
    this.fireStoreUser = this.commonService.fireStoreUser
  }

  signOut() {
    this.firebaseService.signOut()
  }

}
