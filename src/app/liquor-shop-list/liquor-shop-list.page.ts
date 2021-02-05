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
  selector: 'app-liquor-shop-list',
  templateUrl: './liquor-shop-list.page.html',
  styleUrls: ['./liquor-shop-list.page.scss'],
})
export class LiquorShopListPage implements OnInit {
all_liquor_shops :any =[];
all_liquor :any =[];
liquorShopName='';
liquorLocation='';
liquorName='';
liquorShopOwner='';
id='';
liquorSize='';
liquorPrice='';
liquorLocationLatitude='';
liquorLocationLongitude='';
youtube_link='';
twitter_link='';
fb_link='';
website='';
phone='';
liquorShopOwnerEmail='';
// youtube_link='';

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
    this.getPosition();
    this.userDetails.getLiquorShops().subscribe(
            (data) => {
                this.all_liquor_shops = data;
                console.log(this.all_liquor_shops)
                this.helper.dismissLoader();
            },
            (err) => {
                console.log(err);
            });

    this.userDetails.getLiquorList().subscribe(
            (data) => {
                this.all_liquor = data;
                console.log(this.all_liquor)
                this.helper.dismissLoader();
            },
            (err) => {
                console.log(err);
            });
  }

    public optionsFn(): void { //here item is an object 
     console.log(this.liquorName);
    localStorage.setItem('language_id',this.liquorName);

  }

 getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({
            lng: resp.coords.longitude,
           lat: resp.coords.latitude
         });
          console.log(resp.coords.longitude);
          this.liquorLocationLatitude=String(resp.coords.latitude);
          this.liquorLocationLongitude=String(resp.coords.longitude);
        },
        err => {
          reject(err);
        });
    });

  }




  submitValues(){
    if (this.liquorShopOwner=="") {
      this.helper.showErrorCustom("Please enter Liquor Shop Owner Name")
    }else if (this.liquorShopName=="") {
      this.helper.showErrorCustom("Please enter Liquor Shop Name")
    }else if (this.liquorLocation=="") {
      this.helper.showErrorCustom("Please enter Liquor Shop Location")
    }else if (this.liquorLocationLatitude=="") {
      this.helper.showErrorCustom("Please enter Liquor Shop Location Latitude")
    }else if (this.liquorLocationLongitude=="") {
      this.helper.showErrorCustom("Please enter Liquor Shop Location Longitude")
    }else if (this.liquorShopOwnerEmail=="") {
      this.helper.showErrorCustom("Please enter Liquor Shop Owner Email")
    }else if (this.phone=="") {
      this.helper.showErrorCustom("Please enter your phone no")
    }else{
    this.authService.AddLiquorShops(this.liquorShopOwner,this.liquorShopName,this.liquorLocation,this.liquorName,this.liquorPrice,this.liquorSize,this.liquorLocationLatitude,this.liquorLocationLongitude,this.liquorShopOwnerEmail,this.phone,this.website,this.fb_link,this.twitter_link,this.youtube_link); 
      this.liquorLocation='';
    this.liquorShopName='';
    this.liquorName='';
    this.liquorShopOwner='';
  }
  }
  edit(liquorShopOwner,liquorShopName,liquorLocation,liquorName,id,liquorLocationLatitude,liquorLocationLongitude,liquorShopOwnerEmail,phone,website,fb_link,twitter_link,youtube_link){
    this.liquorShopOwner=liquorShopOwner;
    this.liquorLocation=liquorLocation;
    this.liquorShopName=liquorShopName;
    this.liquorName=liquorName;
    this.id=id;
    this.liquorLocationLatitude=liquorLocationLatitude;
    this.liquorLocationLongitude=liquorLocationLongitude
    this.liquorShopOwnerEmail=liquorShopOwnerEmail;
    this.phone=phone
    this.website=website;
    this.fb_link=fb_link;
    this.twitter_link=twitter_link;
    this.youtube_link=youtube_link
    console.log(id)
    
  }
  UpdateValues(){
        if (this.liquorShopOwner=="") {
      this.helper.showErrorCustom("Please enter Liquor Shop Owner Name")
    }else if (this.liquorShopName=="") {
      this.helper.showErrorCustom("Please enter Liquor Shop Name")
    }else if (this.liquorLocation=="") {
      this.helper.showErrorCustom("Please enter Liquor Shop Location")
    }else if (this.liquorLocationLatitude=="") {
      this.helper.showErrorCustom("Please enter Liquor Shop Location Latitude")
    }else if (this.liquorLocationLongitude=="") {
      this.helper.showErrorCustom("Please enter Liquor Shop Location Longitude")
    }else if (this.liquorShopOwnerEmail=="") {
      this.helper.showErrorCustom("Please enter Liquor Shop Owner Email")
    }else if (this.phone=="") {
      this.helper.showErrorCustom("Please enter your phone no")
    }else{
    this.userDetails.UpdateLiquorShopData('liquorshops', this.id,this.liquorShopOwner, this.liquorShopName, this.liquorLocation,this.liquorName,this.liquorSize,this.liquorPrice,this.liquorLocationLatitude,this.liquorLocationLongitude,this.liquorShopOwnerEmail,this.phone,this.website,this.fb_link,this.twitter_link,this.youtube_link); 
    this.liquorShopOwner='';
    this.liquorShopName='';
    this.liquorLocation='';
    this.liquorLocationLatitude='';
    this.liquorLocationLongitude='';
    this.liquorShopOwnerEmail='';
    this.phone='';
    this.website='';
    this.fb_link='';
    this.twitter_link='';
    this.youtube_link='';
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
          this.userDetails.deleteLiquorShop(id);    
               }
      }]
    })
      .then(alert => {
        alert.present();
      });
     
  }
}

