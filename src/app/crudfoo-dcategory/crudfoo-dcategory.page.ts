import { Component, OnInit } from '@angular/core';
import { HelperProvider } from '../services/helper.service';
import { UserDetailsService } from '../services/user-details.service';

@Component({
  selector: 'app-crudfoo-dcategory',
  templateUrl: './crudfoo-dcategory.page.html',
  styleUrls: ['./crudfoo-dcategory.page.scss'],
})
export class CRUDFooDCategoryPage implements OnInit {

  public category: {items: FOODCATEGORY[];};
  constructor(private userDetails:UserDetailsService,
    public helper:HelperProvider
  ) {
    this.category = {items: []};
  }

  ngOnInit() {
    this.getShopList();
    this.getCategory(); 
  }

  public shopList : any = [];
  getShopList (){
    this.userDetails.getShopDetails().subscribe(
      res => {
        this.shopList = res;
      }
    )
  }

  getCategory(){
    this.userDetails.getAllFoodCategory().subscribe(
        res => {
          this.getShopName(res);
        },
        err => {console.log(err)},
    )
  }

  getShopName(categoryResponse){
    // this.category.items = [];
    categoryResponse.forEach((response) => {
      this.userDetails.getShopDetails(parseInt(response.shopId)).subscribe(
        res => {
          this.pushDataintoFoodCategory(response,res[0]);
        },err => console.log(err),
      )
    });
  }

  pushDataintoFoodCategory(category,Shop){
    this.category.items = this.category.items.filter(({ id }) => id !== category.id); // removing the Duplicasy or 0 selected from Local variable
    this.category.items.push({
      id : category.id,
      category : category.category,
      shopId : category.shopId,
      shopName : Shop.liquorShopName,
    });
  }

  addUpdateData = {
    categoryId : '',shopId : '',categoryName : '',
  }

  saveCategory(){
    this.addUpdateData.categoryId = '';
    if(this.addUpdateData.shopId == ''){
      this.helper.showErrorCustom('Please select the Shop')
    }else if(this.addUpdateData.categoryName == ''){
      this.helper.showErrorCustom('Category name is Required')
    }else{
      this.userDetails.saveCategoryDetails(this.addUpdateData);
    }
  }

  update(){
    this.userDetails.updateCategoryDetails(this.addUpdateData);
  }

  deleteCategory(category){
    this.userDetails.deleteCategoryDetails(category.id);
  }

  updateCategory(category){
    this.addUpdateData.categoryId = category.id;
    this.addUpdateData.shopId = category.shopId;
    this.addUpdateData.categoryName = category.category;
  }

}

interface FOODCATEGORY {
  id : string,
  category : string,
  shopId : string,
  shopName : string,
}
