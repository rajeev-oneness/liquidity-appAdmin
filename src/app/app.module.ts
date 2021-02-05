import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelperProvider } from './services/helper.service';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
		   IonicModule.forRoot(),
		    AppRoutingModule,
		    AngularFireModule.initializeApp(environment.firebase),
        	AngularFirestoreModule, // imports firebase/firestore, only needed for database features
        	AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
        	AngularFireStorageModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HelperProvider,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
