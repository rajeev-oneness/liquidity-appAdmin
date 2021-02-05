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
  selector: 'app-enquiry-list',
  templateUrl: './enquiry-list.page.html',
  styleUrls: ['./enquiry-list.page.scss'],
})
export class EnquiryListPage implements OnInit {
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
message='';
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

    this.userDetails.getAllenquiry().subscribe(
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
    }else if (this.message=="") {
      this.helper.showErrorCustom("Please enter your date of birth")
    }else{
          this.authService.AddEnquiryList(this.mail,this.name,this.mobile,this.message); 
this.mail='';
    this.name='';
    this.mobile='';
    this.message='';
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
          this.userDetails.deleteEnquiryList(id);     
               }
      }]
    })
      .then(alert => {
        alert.present();
      });
    
  }
}
