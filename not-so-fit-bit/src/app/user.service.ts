import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, doc, setDoc, getDocs, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// export interface User{
//   id: string,
//   name: string,
//   email: string,
//   userName: string,
//   password: string
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   private firestore = inject(Firestore);
//   private userCollection = collection(this.firestore, 'users');

//   getUser(): Observable<User[]>{
//     return collectionData(this.userCollection, ({idField: 'id'})) as Observable<User[]>
//   }

//   addUser(newUser: User){
//     const userRef = doc(this.userCollection);
//     const newId = userRef.id;
//     newUser.id = newId;
//     setDoc(userRef, newUser);
//   }

//   checkUsernameExists(userName: string): Promise<boolean> {
//     const usernameQuery = query(this.userCollection, where('userName', '==', userName));
//     return getDocs(usernameQuery).then(snapshot => !snapshot.empty)
//   }
// }
