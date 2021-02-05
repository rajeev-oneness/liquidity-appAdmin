import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../services/user-details.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  public foodItem: {items: FOODITEM[];};
  constructor(private userDetails:UserDetailsService) {
    this.foodItem = {items: []};
  }

  ngOnInit() {
  }

  reportTypeChange(reportType){
    if(reportType.value == 'food'){
      this.getFoodReport();
    }else if(reportType.value == 'liquor'){

    }else if(reportType.value == 'vault'){

    }
  }

  getFoodReport(){
    this.userDetails.getAllFoodOrderHistory().subscribe(
      res => {
        this.pushFoodDataIntoInterface(res);
      },err => {console.log(err)}
    )
  }
  
  pushFoodDataIntoInterface(foodItem){
      this.foodItem.items = []; // doing empty the Interface Class
      foodItem.forEach((response) => {
          let UserName : any = '';
          let ShopName : any = '';
          // this.getShopNameByShopId(response.shopId);
          // this.userDetails.getShopDetails(parseInt(response.shopId)).subscribe(
          //   res => {
          //     ShopName = this.getShopNameByDetails(res[0]);
          //   },
          // )

          this.foodItem.items.push({
              bookingId : response.id,
              bookingFor : response.bookingFor,
              foodCategoryName : response.foodCategoryName,
              foodCategoryId : response.foodCategoryId,
              foodItemName : response.foodItemName,
              foodItemType : response.foodItemType,
              foodItemId : response.foodItemId,
              date : response.date,
              email : response.email,
              mobile : response.mobile,
              price : response.price,
              quantity : response.quantity,
              shopId : response.shopId,
              time : response.time,
              userId : response.userId,
              userName : UserName,
              shopName : ShopName,
          });
      });

      // console.log('FoodItems',this.foodItem.items);
  }

  getShopNameByDetails(shopDetails){
    return shopDetails.liquorShopName;
  }

}

interface FOODITEM {
  bookingId : string,
  bookingFor : string,
  foodCategoryName : string,
  foodCategoryId : string,
  foodItemName : string,
  foodItemType : string,
  foodItemId : string,
  date : string,
  email : string,
  mobile : string,
  price : string,
  quantity : string,
  shopId : string,
  time : string,
  userId : string,
  userName : string,
  shopName : string,
}
