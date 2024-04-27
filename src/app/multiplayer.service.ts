import { Injectable, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore/firebase';

@Injectable({
  providedIn: 'root'
})
export class MultiplayerService {

  firestore: Firestore = inject(Firestore);

  constructor() {
   }

  

}
