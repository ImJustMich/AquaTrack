import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({"projectId":"aquatrack2","appId":"1:455622939260:web:4dc6e7a9e465d7d694eff9","storageBucket":"aquatrack2.appspot.com","apiKey":"AIzaSyCYV44I4XQFg_7ar_0A7ri-OFgD7iO5hDI","authDomain":"aquatrack2.firebaseapp.com","messagingSenderId":"455622939260"})), provideAuth(() => getAuth())],
  bootstrap: [AppComponent],
})
export class AppModule {}
