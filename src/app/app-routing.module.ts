import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ShopsComponent } from './pages/shops/shops.component';
import { AddshopComponent } from './pages/addshop/addshop.component';
import { ProductsComponent } from './pages/products/products.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { AboutshopsComponent } from './pages/aboutshops/aboutshops.component';
import { TabBarsComponent } from './pages/tab-bars/tab-bars.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: '',redirectTo: 'home',pathMatch: 'full'},
  { path: 'login', component:LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'shops', component:ShopsComponent },
  { path: 'products', component:ProductsComponent },
  { path: 'addshop', component:AddshopComponent },
  { path: 'orders', component:OrdersComponent },
  { path: 'aboutshops', component:AboutshopsComponent },
  {path:'tabs',component:TabBarsComponent},
  {path:'gallery',component:GalleryComponent},
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }