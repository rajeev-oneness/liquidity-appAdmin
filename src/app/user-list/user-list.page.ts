import { Component, OnInit, ChangeDetectorRef,ViewChildren,QueryList  } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NavController,
          Platform,
          ToastController,
          IonRouterOutlet,
          AlertController,
          ModalController
       } from '@ionic/angular';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
import { UserDetailsService } from 'src/app/services/user-details.service';
import { HelperProvider } from 'src/app/services/helper.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {
all_levels :any =[];
name='';
mail='';
mobile='';
dob='';
gender='';
address='';
id='';
all_user :any =[];
password='';
image='https://via.placeholder.com/300';
constructor(
  	  	public platform: Platform,
        private location: Location,
        private alertController: AlertController,
        public router: Router,
        private authService: AuthenticationService,
        private userDetails: UserDetailsService,
        public helper: HelperProvider,
        private navCtrl: NavController,
		private modalCtrl: ModalController,
  	) {}

 async openAddartistPage() {
   const modal = await this.modalCtrl.create({
      component: 'create-level',
      // cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  ngOnInit() {

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
  submitValues(){
    this.dob = this.dob.split('T')[0]; 
    if (this.mail=="") {
      this.helper.showErrorCustom("Please enter your mail")
    }else if (this.name=="") {
      this.helper.showErrorCustom("Please enter your name")
    }else if (this.mobile=="") {
      this.helper.showErrorCustom("Please enter your mobile")
    }else if (this.dob=="") {
      this.helper.showErrorCustom("Please enter your date of birth")
    }else if (this.gender=="") {
      this.helper.showErrorCustom("Please enter your gender")
    }else if (this.address=="") {
      this.helper.showErrorCustom("Please enter your address")
    }else if (this.password=="") {
      this.helper.showErrorCustom("Please enter your password")
    }else{
          let regData = {
        "email":this.mail,
        "createPassword":this.password,
        "confirmPassword":this.password,
        "name":this.name,
        // "mail":this.mail,
        "mobile":this.mobile,
        "dob":this.dob,
        "gender":this.gender,
        "address":this.address,
        "image":this.image

        
      };
    this.authService
              .emailSignUp(regData)
              .then(res => {
                  if (res.status === 0) {
                      this.helper.showError(res.error.code);
                  }
                  if (res.status === 1) {
                      this.helper.presentToast("Sucessfully Signup");
                      // this.authService.addUser(this.name,this.mail,this.mobile,this.dob,this.gender,this.address,this.image); 
                      this.mail='';
                      this.name='';
                      this.mobile='';
                      this.dob='';
                      this.gender='';
                      this.address='';
                  }
              })
              .catch(err => {
                  console.log('Signup err : ', err);
              });
      

    }


  }
  edit(name,mobile,mail,id,dob,gender,address){
    this.name=name;
    this.mail=mail;
    this.id=id;
    this.mobile=mobile;
    this.dob=dob;
    this.gender=gender;
    this.address=address;
    console.log(id)
    
  }
  UpdateValues(){
    this.dob = this.dob.split('T')[0]; 
     console.log(this.dob);
     if (this.mail=="") {
      this.helper.showErrorCustom("Please enter your mail")
    }else if (this.name=="") {
      this.helper.showErrorCustom("Please enter your name")
    }else if (this.mobile=="") {
      this.helper.showErrorCustom("Please enter your mobile")
    }else if (this.dob=="") {
      this.helper.showErrorCustom("Please enter your date of birth")
    }else if (this.gender=="") {
      this.helper.showErrorCustom("Please enter your gender")
    }else if (this.address=="") {
      this.helper.showErrorCustom("Please enter your address")
    }else if (this.password=="") {
      this.helper.showErrorCustom("Please enter your password")
    }else{
    this.userDetails.UpdateUserData('userProfile', this.id, this.name, this.mail, this.mobile,this.dob,this.gender,this.address); 
    this.mail='';
    this.name='';
    this.mobile='';
    this.dob='';
    this.gender='';
    this.address='';
    }
  }
  deleteLevel(id){
    this.alertController.create({
      header: 'Liqudity App',
      message: 'Do you want to delete this data?',
      backdropDismiss: false,
      buttons: [{
        text: 'No',
        role: 'cancel',
        handler: () => {
          console.log('Application exit prevented!');
        }
      }, {
        text: 'Yes',
        handler: () => {
          this.userDetails.deleteUserData(id);     
               }
      }]
    })
      .then(alert => {
        alert.present();
      });
    
  }
}
