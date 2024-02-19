import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp({"projectId":"hidro-fc3c5","appId":"1:726430561039:web:ebb205ddbf27daa67f047a","databaseURL":"https://hidro-fc3c5-default-rtdb.firebaseio.com","storageBucket":"hidro-fc3c5.appspot.com","apiKey":"AIzaSyAo_bVXS3TXnRsqtoQ-dOhUyDAJiFnOD3Y","authDomain":"hidro-fc3c5.firebaseapp.com","messagingSenderId":"726430561039","measurementId":"G-JYBSVK8919"})), provideFirestore(() => getFirestore())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
