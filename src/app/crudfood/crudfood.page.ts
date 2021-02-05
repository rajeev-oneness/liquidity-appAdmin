import { Component, OnInit } from '@angular/core';
import { HelperProvider } from '../services/helper.service';
import { UserDetailsService } from '../services/user-details.service';

@Component({
  selector: 'app-crudfood',
  templateUrl: './crudfood.page.html',
  styleUrls: ['./crudfood.page.scss'],
})
export class CRUDFoodPage implements OnInit {

  public shopList : any = [];
  public categoryList : any = [];
  public foodItemList : any = [];
  public food: {items: FOODITEMS[];};
  public category: {list: CATEGORY[];};
  public shop: {list: SHOP[];};

  constructor(private userDetails:UserDetailsService,private helper:HelperProvider) {
    this.food = {items: []};
    this.category = {list: []};
    this.shop = {list: []};
  }
  
  ngOnInit() {
    this.getShopList();
    this.getAllCategoryList();
    this.getAllFoodItemList();
  }

  getAllCategoryList(){
    this.userDetails.getAllFoodCategory().subscribe(
      res => {
        res.forEach((category) => {
          this.pushDataIntoCategoryModel(category);
        });
      },
      err => {console.log(err)}
    )
  }

  pushDataIntoCategoryModel(category){
    this.category.list.push({
      id : category.id,
      category : category.category,
      shopId : category.shopId,
    });
  }

  getCategoryList(shopDetailsId){
    let filterData = [];
    this.category.list.forEach((category) => {
      if(category.shopId == shopDetailsId){
        filterData.push({
          category : category.category,
          id : category.id,
          shopId : category.shopId,
        });
      }
    });
    this.categoryList = filterData;
  }

  getShopList (){
    this.userDetails.getShopDetails().subscribe(
      res => {
        this.shopList = res;
        res.forEach((shop) => {
          this.pushDataIntoShopModel(shop);
        });
      }
    )
  }

  pushDataIntoShopModel(response){
    this.shop.list.push({
      id : response.id,
      shopName : response.liquorShopName,
    });
  }

  getAllFoodItemList(){
    this.userDetails.getAllFoodItems().subscribe(
      res => {
        res.forEach((foodItem) => {
          this.pushDataIntoFoodItemModel(foodItem);
        });
        this.makeDataForFoodList(res)
      },err => console.log(err),
    )
  }

  pushDataIntoFoodItemModel(foodItemData){
    this.food.items.push({
      description : foodItemData.description,
      foodCategoryId : foodItemData.foodCategoryId,
      id : foodItemData.id,
      item : foodItemData.item,
      price : foodItemData.price,
      veg : foodItemData.veg,
      categoryName : '',
    });
  }

  makeDataForFoodList(response){
    let data = [];
    response.forEach((foodItem) => {
      data.push({
        description : foodItem.description,
        foodCategoryId : foodItem.foodCategoryId,
        id : foodItem.id,
        item : foodItem.item,
        price : foodItem.price,
        veg : foodItem.veg,
      });
    });
    this.foodItemList = data;
  }

  // getCategoryName(categoryId){
  //   this.category.list.forEach((categoryData) => {
  //     if(categoryData.id == categoryId){
  //       console.log(categoryData.category);
  //       return ''+categoryData.category;
  //     }
  //   })
  //   return '';
  // }

  addUpdateData = {
    id:'',shopId:'',categoryId:'',description:'',item:'',price:'',veg:'veg',
  }

  saveFoodData(){
    this.addUpdateData.id = '';
    if(this.addUpdateData.shopId == ''){
      this.helper.showErrorCustom('Please select the Shop')
    }else if(this.addUpdateData.categoryId == ''){
      this.helper.showErrorCustom('Please select the Category')
    }else if(this.addUpdateData.item == ''){
      this.helper.showErrorCustom('Item Name is Required');
    }else if(this.addUpdateData.price == ''){
      this.helper.showErrorCustom('Item Price is Required');
    }else{
      this.userDetails.saveFoodItemDetails(this.addUpdateData);
      // deleting the Form
      this.addUpdateData.item = '';
      this.addUpdateData.price = '';
      this.addUpdateData.veg = 'veg';
      this.addUpdateData.description = '';
    }
  }

  updateBtn(){
    this.userDetails.updateFoodItemDetails(this.addUpdateData);
  }

  updateFoodItem(foodData){
    this.addUpdateData.id = foodData.id;
    this.addUpdateData.categoryId = foodData.foodCategoryId;
    this.addUpdateData.description = foodData.description;
    this.addUpdateData.item = foodData.item;
    this.addUpdateData.price = foodData.price;
    this.addUpdateData.veg = foodData.veg;
  }

  deleteFoodItem(foodData){
    this.userDetails.deleteFoodItemDetails(foodData.id);
  }

}

interface FOODITEMS {
  description : string,
  foodCategoryId : string,
  id : string,
  item : string,
  price : string,
  veg : string,
  categoryName : string,
}

interface CATEGORY{
  category : string,
  id : string,
  shopId : string,
}

interface SHOP{
  id : string,
  shopName : string,
}
