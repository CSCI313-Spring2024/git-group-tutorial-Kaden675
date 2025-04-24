import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyA7oqbzsWzKV0Q1c1C2iLYU90cECK1Ag3g",
  authDomain: "not-so-fit-bit.firebaseapp.com",
  projectId: "not-so-fit-bit",
  storageBucket: "not-so-fit-bit.firebasestorage.app",
  messagingSenderId: "80310718823",
  appId: "1:80310718823:web:fb5652da149e4627561fc2",
  measurementId: "G-JEL0QP2JWR"
};

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
