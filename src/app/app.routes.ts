import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProductsListComponent} from "./products-list/products-list.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {ProductComponent} from "./product/product.component";
import {ErrorComponent} from "./error/error.component";
import {authGuard} from "./auth.guard";
import {PokemonListComponent} from "./pokemon-list/pokemon-list.component";
import {PokemonDetailsComponent} from "./pokemon-details/pokemon-details.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pokemons', component: PokemonListComponent },
  { path: 'pokemons/:id', component: PokemonDetailsComponent },

  // {
  //   path: 'dashboard',
  //   loadComponent: () => import('./dashboard/dashboard.component')
  //     .then(c => c.DashboardComponent),
  // },
  // {
  //   path: 'product',
  //   canActivate: [authGuard],
  //   component: ProductComponent,
  //   children: [
  //     { path: 'list', component: ProductsListComponent },
  //     { path: ':productId', component: ProductDetailsComponent },
  //   ]
  // },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];
