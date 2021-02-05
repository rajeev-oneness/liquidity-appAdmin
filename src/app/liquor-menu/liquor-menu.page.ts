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
  selector: 'app-liquor-menu',
  templateUrl: './liquor-menu.page.html',
  styleUrls: ['./liquor-menu.page.scss'],
})
export class LiquorMenuPage implements OnInit {
all_liquor_shops :any =[];
all_liquor :any =[];
liquorShopName='';
liquorSize='';
liquorName='';
liquorShopOwner='';
liquorShopOwnerList :any =[];
liquorShopNameList :any =[];
all_liquor_size :any =[];
liquorPrice='';
id='';
liquorLocation='';
liquorShopId='';
liquorCategory='';    //liquorCategory and liquorName is exchanged.
all_liquor_price_with_ml :any =[];
SmallLiquorMinPrice='';
SmallLiquorMaxPrice='';
SmallLiquorNormalPrice='';
BigLiquorMinPrice='';
BigLiquorMaxPrice='';
BigLiquorNormalPrice='';
all_liquor_price_with_ml_final :any =[];
getLiquorListWithPrice:any =[];
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
    this.userDetails.getLiquorShops().subscribe(
            (data) => {
                this.all_liquor_shops = data;
                for (var i = 0; i < this.all_liquor_shops.length; ++i) {
                console.log(this.all_liquor_shops[i].liquorShopOwner);
                this.liquorShopOwnerList.push({liquorShopOwner:this.all_liquor_shops[i].liquorShopOwner});
                this.liquorShopNameList.push(
                  {
                    liquorShopName:this.all_liquor_shops[i].liquorShopName,
                    liquorShopId:this.all_liquor_shops[i].id
                  },
                  // {
                    
                  // },
                  );
                }
                console.log(this.all_liquor_shops);
                console.log(this.liquorShopNameList)
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

    this.userDetails.getLiquorListWithPrice().subscribe(
            (data) => {
                this.getLiquorListWithPrice = data;
                console.log("getLiquorListWithPrice>>>",data);

                this.helper.dismissLoader();
            },
            (err) => {
                console.log(err);
            });


    this.all_liquor_size.push(
    {
    	id:'1',
      	liquorSize:"30ml",
      },
      {
      	id:'2',
      	liquorSize:"60ml",
      },
    )
  }

    public optionsFn(): void { //here item is an object 
     console.log(this.liquorName);
  }
      public optionsliquorShopName(): void { //here item is an object 
     console.log(this.liquorShopId);
  }
      public optionsliquorShopOwner(): void { //here item is an object 
     console.log(this.liquorShopOwner);
  }
     public optionsliquorSize(): void { //here item is an object 
     console.log(this.liquorSize);
  }
  submitValues(){
    this.all_liquor_price_with_ml.push({
        liquorName:this.liquorCategory,
        liquorCategory:this.liquorName,
        SmallLiquorMinPrice:this.SmallLiquorMinPrice,
        SmallLiquorMaxPrice:this.SmallLiquorMaxPrice,
        SmallLiquorNormalPrice:this.SmallLiquorNormalPrice,
        BigLiquorMinPrice:this.BigLiquorMinPrice,
        BigLiquorMaxPrice:this.BigLiquorMaxPrice,
        BigLiquorNormalPrice:this.BigLiquorNormalPrice,
    });
    // this.all_liquor_price_with_ml_final.push(...this.all_liquor_price_with_ml);
    this.authService.AddLiquorWithPrice(this.liquorShopId,this.liquorShopOwner,this.image,this.liquorCategory,this.liquorName,this.SmallLiquorMinPrice,this.SmallLiquorMaxPrice,this.SmallLiquorNormalPrice,this.BigLiquorMinPrice,this.BigLiquorMaxPrice,this.BigLiquorNormalPrice); 
    this.all_liquor_price_with_ml=[];
      this.liquorCategory='';
    this.liquorShopName='';
    this.liquorName='';
    this.SmallLiquorMinPrice='';
    this.SmallLiquorMaxPrice='';
    this.SmallLiquorNormalPrice='';
    this.BigLiquorMinPrice='';
    this.BigLiquorMaxPrice='';
    this.BigLiquorNormalPrice='';
    // this.BigLiquorMinPrice='';
    // this.BigLiquorMaxPrice='';
  }
  edit(liquorShopOwner,liquorLocation,id,liquorName,liquorCategory,SmallLiquorMinPrice,SmallLiquorMaxPrice,SmallLiquorNormalPrice,BigLiquorMinPrice,BigLiquorMaxPrice,BigLiquorNormalPrice,liquorShopId){
    this.liquorShopOwner=liquorShopOwner;
    this.liquorLocation=liquorLocation;
    this.liquorCategory=liquorName
    this.liquorName=liquorCategory;
    this.SmallLiquorMinPrice=SmallLiquorMinPrice;
    this.liquorShopId=liquorShopId;
    this.SmallLiquorMaxPrice=SmallLiquorMaxPrice;
    this.SmallLiquorNormalPrice=SmallLiquorNormalPrice;
    this.BigLiquorMinPrice=BigLiquorMinPrice
    this.BigLiquorMaxPrice=BigLiquorMaxPrice;
    this.BigLiquorNormalPrice=BigLiquorNormalPrice;
    this.id=id;
    console.log(this.liquorPrice)
    
  }
  UpdateValues(){
  	console.log(this.liquorShopOwner, this.liquorShopName,this.liquorLocation,this.liquorName,this.liquorSize,this.liquorPrice);
    this.userDetails.UpdateLiquorWithPrice('liquorPrice', this.liquorShopOwner,this.liquorLocation,this.id,this.liquorName,this.liquorCategory,this.SmallLiquorMinPrice,this.SmallLiquorMaxPrice,this.SmallLiquorNormalPrice,this.BigLiquorMinPrice,this.BigLiquorMaxPrice,this.BigLiquorNormalPrice,this.liquorShopId); 
  this.liquorShopOwner='';
    this.liquorLocation='';
    this.liquorName='';
    this.liquorCategory='';
    this.SmallLiquorMaxPrice='';
    this.SmallLiquorNormalPrice='';
    this.SmallLiquorMinPrice='';
    this.BigLiquorMinPrice='';
    this.BigLiquorMaxPrice='';
    this.BigLiquorNormalPrice='';
  }
  deleteLevel(id){
    console.log(id)
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
          this.userDetails.deleteLiquorWithPrice(id);         }
      }]
    })
      .then(alert => {
        alert.present();
      });
    
  }
}

