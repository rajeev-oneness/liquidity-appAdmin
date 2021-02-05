import { Component, OnInit, ChangeDetectorRef,ViewChildren,QueryList  } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NavController,
          Platform,
          ToastController,
          IonRouterOutlet,
          AlertController,
          MenuController
       } from '@ionic/angular';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
import { UserDetailsService } from 'src/app/services/user-details.service';
import { HelperProvider } from 'src/app/services/helper.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
all_user :any =[];

 constructor(
  	  	public platform: Platform,
        private location: Location,
        private alertController: AlertController,
        public router: Router,
        private authService: AuthenticationService,
        private userDetails: UserDetailsService,
        public helper: HelperProvider,
        private navCtrl: NavController,
          public menuCtrl: MenuController

  	) {}
ionViewDidEnter() {
    this.menuCtrl.enable(true);
		this.userDetails.getUser().subscribe(
            (data) => {
                this.all_user = data;
                console.log(this.all_user)
                this.helper.dismissLoader();
            },
            (err) => {
                console.log(err);
            });


	}
  openLevelLististPage(){
              this.navCtrl.navigateForward('/levels');
  }
  openProgramLististPage(){
    this.navCtrl.navigateForward('/level-wise-program');
  }
  openPromptsPage(){
              this.navCtrl.navigateForward('/prompts');
  }
  openVisions(){
    this.navCtrl.navigateForward('/visions');
  }
  // async logout() {
  //     await this.authService.signOut();
  //     this.navCtrl.navigateRoot('/login');
  // }
  logout() {
    this.alertController.create({
      header: 'Howm App',
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
          this.authService.signOut();
          this.navCtrl.navigateRoot('/login');
        }
      }]
    })
      .then(alert => {
        alert.present();
      });
  }
}
