import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import { DocumentData } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  user: User | undefined
  fireStoreUser: DocumentData | undefined

  constructor() { }

}
