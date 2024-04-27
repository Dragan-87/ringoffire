import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"ringoffire-fbc8b","appId":"1:356877922662:web:160d59269ed18ee0fa58a7","storageBucket":"ringoffire-fbc8b.appspot.com","apiKey":"AIzaSyBmyatItilTFMt6sXe7N1VTWVp_8nbAahQ","authDomain":"ringoffire-fbc8b.firebaseapp.com","messagingSenderId":"356877922662"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
