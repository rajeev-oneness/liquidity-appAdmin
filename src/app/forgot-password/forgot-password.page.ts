import { Platform,NavController, ModalController } from '@ionic/angular';
import { Component, OnInit, ChangeDetectorRef,ViewChildren,QueryList  } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastController,IonRouterOutlet ,AlertController } from '@ionic/angular';
import { HelperProvider } from 'src/app/services/helper.service';
import { Router } from '@angular/router';
// import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
 // Login
    @ViewChildren(IonRouterOutlet) routerOutlets: QueryList < IonRouterOutlet > ;

  lastTimeBackPress = 0;
  timePeriodToExit = 2000;  
  usermail = '';
  password = '';
  cpassword = '';
  // loginForm: FormGroup;
  isSubmitted = false;
  isSignUpSubmitted = false;

  isPasswordVisible = false;
  confirmPasswordType: string = "password";

  constructor(
  	  private authService: AuthenticationService,
      private navCtrl: NavController,
      // public formBuilder: FormBuilder,
      public toastController: ToastController,
      public helper: HelperProvider,
      public router: Router,
      public platform: Platform,
      public cdr: ChangeDetectorRef,
      public modalController: ModalController,
      private location: Location,
      private alertController: AlertController,
  	) { 

  		// this.loginForm = this.formBuilder.group({
    //       userType: [Validators.compose([Validators.required])],
    //       email: [
    //           '',
    //           Validators.compose([Validators.required, Validators.email])
    //       ],
          // password: [
          //     '',
          //     Validators.compose([
          //         Validators.required,
          //         Validators.minLength(6)
          //     ])
          // ],
          // cpassword: [
          //       "",
          //       Validators.compose([
          //           Validators.required,
          //           ConfirmPasswordValidator.equalto("password")
          //       ])
          //   ],
      // });

      this.platform.backButton.subscribe(()=>{
        this.onBack();
      });
      // this.backButtonEvent();
  	 }

  ngOnInit() {
  }

   // checkLgField(field) {
   //    const formField = this.loginForm.controls[field];
   //    return formField.invalid && (formField.touched || this.isSubmitted);
   // }

   pswdvisible() {
      console.log('Testing...');

      this.isPasswordVisible = !this.isPasswordVisible;
      setTimeout(() => {
          this.cdr.detectChanges();
      }, 100);
  }

    login() {
	      // this.isSubmitted = true;

	      // if (this.loginForm.valid) {
          if(this.usermail==''){
            this.helper.presentToast("Please enter your mail");
            }else{
	          this.authService
                .resetPassword(this.usermail)
                .then(
                    res => {
                        if (res.status === 1) {
                            this.navCtrl.pop();
                            this.helper.presentToast("Please check your email for instructions on resetting your password");
                            this.navCtrl.navigateForward('/login');

                        } else {
                            this.helper.showError(res.error.code);
                            // console.log(res);
                        }
                    },
                    err => console.log(err)
                );
	      }
  	}

    private async onBack() {
    this.navCtrl.navigateBack('/getstarted');
  }


  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(0, () => {
      this.routerOutlets.forEach(async(outlet: IonRouterOutlet) => {
        if (this.router.url != '/home') {
          // await this.router.navigate(['/']);
          await this.location.back();
        } else if (this.router.url === '/home') {
          if (new Date().getTime() - this.lastTimeBackPress >= this.timePeriodToExit) {
            this.lastTimeBackPress = new Date().getTime();
            this.presentAlertConfirm();
          } else {
            navigator['app'].exitApp();
          }
        }
      });
    });
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      // header: 'Confirm!',
      message: 'Are you sure you want to exit the app?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {}
      }, {
        text: 'Close App',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    });
  
    await alert.present();
  }

}
