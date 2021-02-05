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
  selector: 'app-add-liquor',
  templateUrl: './add-liquor.page.html',
  styleUrls: ['./add-liquor.page.scss'],
})
export class AddLiquorPage implements OnInit {
all_liquor_shops :any =[];
// liquorShopName='';
// liquorLocation='';
liquorName='';
id='';
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
    this.userDetails.getLiquorList().subscribe(
            (data) => {
                this.all_liquor_shops = data;
                console.log(this.all_liquor_shops)
                this.helper.dismissLoader();
            },
            (err) => {
                console.log(err);
            });
  }
  submitValues(){
    let data = {
        // "liquorShopName":this.liquorShopName,
        // "liquorLocation":this.liquorLocation,
        "liquorName":this.liquorName,
        
      };
    this.authService.addLiquor(this.liquorName,this.image); 
     
    this.liquorName='';
  }
  edit(liquorName,id){
    
    this.liquorName=liquorName
    this.id=id;
    console.log(id)
    
  }
  UpdateValues(){
    this.userDetails.UpdateLiquor('liquorName', this.id, this.liquorName); 
    this.liquorName='';
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
          this.userDetails.deleteLiquor(id);   
               }
      }]
    })
      .then(alert => {
        alert.present();
      });
    
  }
}

