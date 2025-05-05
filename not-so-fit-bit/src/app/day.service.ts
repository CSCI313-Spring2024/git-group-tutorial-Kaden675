import { inject, Injectable } from '@angular/core';
import { collection, collectionData, CollectionReference, deleteDoc, doc, docData, DocumentSnapshot, Firestore, getDoc, setDoc, updateDoc } from '@angular/fire/firestore';
import { Observable, of, switchMap, take, from, map } from 'rxjs';
import { AuthService } from './auth.service';

export interface Day {
  id: string,
  date: string,
  workout: string,
  exerciseDuration: string,
  fluid: string,
  calorie: string,
}

@Injectable({
  providedIn: 'root'
})


export class DayService {

  private firestore = inject(Firestore);
  private authService = inject(AuthService);

  constructor() {}

getDays() {
  return this.authService.user$.pipe(
    switchMap(user => {
      if (!user) return of([]);
      const ref = collection(this.firestore, `users/${user.uid}/days`) as CollectionReference<Day>;
      return collectionData<Day>(ref, {idField: 'id'});
    })
  );
}

getDayById(id: string): Observable<Day | undefined> {
  const user = this.authService.getUser();
  if (!user) {
    return of (undefined);
    }

  const dayRef = doc(this.firestore, `users/${user.uid}/days/${id}`);

  return from(getDoc(dayRef)).pipe(
    map (docSnap => {
      if (docSnap.exists()){
      const data = docSnap.data() as Omit<Day, 'id'>;
      return{
        id: docSnap.id,
        ...data
      } as Day;
    }
    return undefined;
  })
  );
}

addDay(day: Omit<Day, 'id'>) {
  return this.authService.user$.pipe(
    take(1),
    switchMap(async user => {
      if (!user) return null;
      const id = doc(collection(this.firestore, `users/${user.uid}/days`)).id;
      const ref = doc(this.firestore, `users/${user.uid}/days/${id}`);
      await setDoc(ref, day);
      return {...day, id};
    })
  )
}

updateDate(id: string, updated: Partial<Day>) {
  return this.authService.user$.pipe(
    take(1),
    switchMap(user => {
      if (!user) return of (null);
      const ref = doc(this.firestore, `users/${user.uid}/days/${id}`);
      return updateDoc(ref, updated);
    })
  );
}

deleteDay(id: string) {
  return this.authService.user$.pipe(
    take(1),
    switchMap(user => {
      if(!user) return of (null);
      const ref = doc(this.firestore, `users/${user.uid}/days/${id}`);
      return deleteDoc(ref);
    })
  );
}

}
