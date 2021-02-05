import { HelperProvider } from './services/helper.service';
import { AuthenticationService } from './services/authentication.service';

import { Router } from '@angular/router';
import { Component, ViewChildren, QueryList } from '@angular/core';

import { Platform, AlertController, NavController, IonRouterOutlet ,MenuController} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { take } from 'rxjs/operators';
import { Location } from '@angular/common';

// declare var TestFairy: any;

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
page_tracker:any;
mail:any;
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private alertCtrl: AlertController,
        private statusBar: StatusBar,
        private navCtrl: NavController,
        private auth: AuthenticationService,
        public router: Router,
        private helper: HelperProvider,
        private _location: Location,
        public menuCtrl: MenuController
    ) {
        // this.initializeApp();
        // this.getStaticText();
        
    }

   

    initializeApp() {
        this.platform.ready().then(() => {

            // TestFairy.begin('SDK-CEiyApIM');
            // TestFairy.log('>>>>>>>>>>> COMPONENT LOADED');

            this.statusBar.styleDefault();
            this.statusBar.styleLightContent();
            this.splashScreen.hide();
            this.helper.presentLoading();

            const userAuthSubs = this.auth.currentAuthState.subscribe(auth => {
                console.log('App Component authState : ', auth);
                userAuthSubs.unsubscribe();

                console.log('isAuthenticated : ', this.auth.isAuthenticated());

                  this.mail=localStorage.getItem("mail");
                  console.log("mailID>>",localStorage.getItem("mail"))

                if (this.auth.isAuthenticated()) {
                    this.helper.dismissLoader();
                    //   this.navCtrl.navigateRoot('/members/home');
                    this.auth.getUserById(this.auth.getUserId()).pipe(take(1)).subscribe(
                        (user: any) => {
                            

                            console.log('user', user);

                            this.helper.dismissLoader();
                            this.navCtrl.navigateRoot('/home');
                            // this.navCtrl.navigateRoot('/prompt-listing');
                        },
                        err => {
                            this.helper.dismissLoader();
                            console.log(err);
                        }
                    );
                } else {
                  console.log("dismissLoader")
                    this.helper.dismissLoader();
                                 this.menuCtrl.close();

                    // this.navCtrl.navigateRoot('home');
                    this.router.navigate(['/login']);
                }
            });

        });

        this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      console.log('Back press handler!');
      if (this._location.isCurrentPathEqualTo('/prompt-listing') || this._location.isCurrentPathEqualTo('/welcome')) {

        // Show Exit Alert!
        console.log('Show Exit Alert!');
        this.showExitConfirm();
        processNextHandler();
      } else {

        // Navigate to back page
        console.log('Navigate to back page');
        this._location.back();

      }

    });

    this.platform.backButton.subscribeWithPriority(5, () => {
      console.log('Handler called to force close!');
      this.alertCtrl.getTop().then(r => {
        if (r) {
          navigator['app'].exitApp();
        }
      }).catch(e => {
        console.log(e);
      })
    });

    }

showExitConfirm() {
    this.alertCtrl.create({
      header: 'Howm App',
      message: 'Do you want to close the app?',
      backdropDismiss: false,
      buttons: [{
        text: 'Stay',
        role: 'cancel',
        handler: () => {
          console.log('Application exit prevented!');
        }
      }, {
        text: 'Exit',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    })
      .then(alert => {
        alert.present();
      });
  }


  openliquorMenuPage(){
    this.navCtrl.navigateForward('/liquor-menu');
  }
  openorderslistPage(){
    this.navCtrl.navigateForward('/user-order-list');
  }
  openUserListPage(){
              this.navCtrl.navigateForward('/user-list');
  }
  openliquorshoplistPage(){
    this.navCtrl.navigateForward('/liquor-shop-list');
  }
  openliquorlistPage(){
    this.navCtrl.navigateForward('/add-liquor');
  }

  openEnquiryListPage(){
    this.navCtrl.navigateForward('/enquiry-list');
  }

  openReportListPage(){
    this.navCtrl.navigateForward('/report-list');
  }
  // async logout() {
  //     await this.auth.signOut();
  //     this.navCtrl.navigateRoot('/login');
  // }

  logout() {
    this.alertCtrl.create({
      header: 'Liqudity App',
      message: 'Do you want to logout?',
      backdropDismiss: false,
      buttons: [{
        text: 'Stay',
        role: 'cancel',
        handler: () => {
          console.log('Application exit prevented!');
        }
      }, {
        text: 'Logout',
        handler: () => {
          this.auth.signOut();
          this.menuCtrl.enable(false);
          this.navCtrl.navigateRoot('/login');
        }
      }]
    })
      .then(alert => {
        alert.present();
      });
  }
}
