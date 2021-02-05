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
  selector: 'app-user-order-list',
  templateUrl: './user-order-list.page.html',
  styleUrls: ['./user-order-list.page.scss'],
})
export class UserOrderListPage implements OnInit {
all_levels :any =[];
name='';
mail='';
price='';
orderDate='';
orderid='';
shop_name='';
id='';
all_orders :any =[];

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

    this.userDetails.getOrderList().subscribe(
            (data) => {
                this.all_orders = data;
                console.log(this.all_orders);
                
                this.helper.dismissLoader();
            },
            (err) => {
                console.log(err);
            });
  }
  submitValues(){
    this.orderDate = this.orderDate.split('T')[0]; 
    let data = {
        "name":this.name,
        "mail":this.mail,
        "price":this.price,
        "orderDate":this.orderDate,
        "orderid":this.orderid,
        "shop_name":this.shop_name,
        
      };
    this.authService.addOrder(this.name,this.mail,this.price,this.orderDate,this.orderid,this.shop_name); 
    this.mail='';
    this.name='';
    this.price='';
    this.orderDate='';
    this.orderid='';
    this.shop_name='';

  }
  edit(name,mail,price,id,orderDate,orderid,shop_name){
    this.name=name;
    this.mail=mail;
    this.id=id;
    this.price=price;
    this.orderDate=orderDate;
    this.orderid=orderid;
    this.shop_name=shop_name;
    console.log(orderDate)
    
  }
  UpdateValues(){
    this.orderDate = this.orderDate.split('T')[0]; 
     console.log(this.orderDate);
    this.userDetails.UpdateOrderData('orderHistory', this.id, this.name, this.mail, this.price,this.orderDate,this.orderid,this.shop_name); 
    this.mail='';
    this.name='';
    this.price='';
    this.orderDate='';
    this.orderid='';
    this.shop_name='';
  }
  deleteLevel(id){
    this.userDetails.deleteOrder(id); 
  }
  details(item){
    localStorage.setItem('orderDetais', JSON.stringify(item));
    console.log('>>>>>>>>>>>>>',item);
    // this.navCtrl.navigateForward("/orderDetails");
            this.navCtrl.navigateForward('/order-details');

  }
}
