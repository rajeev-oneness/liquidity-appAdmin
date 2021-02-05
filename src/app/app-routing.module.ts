import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },

  {
    path: 'user-list',
    loadChildren: () => import('./user-list/user-list.module').then( m => m.UserListPageModule)
  },
  {
    path: 'liquor-shop-list',
    loadChildren: () => import('./liquor-shop-list/liquor-shop-list.module').then( m => m.LiquorShopListPageModule)
  },
  {
    path: 'user-order-list',
    loadChildren: () => import('./user-order-list/user-order-list.module').then( m => m.UserOrderListPageModule)
  },
  {
    path: 'add-liquor',
    loadChildren: () => import('./add-liquor/add-liquor.module').then( m => m.AddLiquorPageModule)
  },
  {
    path: 'liquor-menu',
    loadChildren: () => import('./liquor-menu/liquor-menu.module').then( m => m.LiquorMenuPageModule)
  },
  {
    path: 'enquiry-list',
    loadChildren: () => import('./enquiry-list/enquiry-list.module').then( m => m.EnquiryListPageModule)
  },
  {
    path: 'order-details',
    loadChildren: () => import('./order-details/order-details.module').then( m => m.OrderDetailsPageModule)
  },
  {
    path: 'report-list',
    loadChildren: () => import('./report/report.module').then( m => m.ReportPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
