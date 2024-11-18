import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProductsListComponent} from "./products-list/products-list.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {ProductComponent} from "./product/product.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product',  component: ProductComponent, children: [
      { path: 'list', component: ProductsListComponent },
      { path: ':productId', component: ProductDetailsComponent },
    ]
  },
];
