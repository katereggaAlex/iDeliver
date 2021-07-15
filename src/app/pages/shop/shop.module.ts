import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';


import { ShopPage } from './shop.page';

import { GalleryPage } from '../gallery/gallery.page';
import { AboutshopPage } from '../aboutshop/aboutshop.page';
import { ProductsPage } from '../products/products.page';

const routes: Routes = [
  {
    path: '',
    component: ShopPage,
    children: [
      {
        path: 'gallery',
        children: [
          {
            path: '',
            component:GalleryPage
          }
        ]
      },
      {
        path: 'products',
        children: [
          {
            path: '',
            component:ProductsPage
          }
        ]
      },
      {
        path: 'aboutshop',
        children: [
          {
            path: '',
            component:AboutshopPage
          }
        ]
      },
      {
       path: '',
       redirectTo: '/shop/products',
        pathMatch: 'full'
      },
      
    ]
  },
  {
    path: '',
    redirectTo: '/shop/products',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
     ],
  declarations: [ShopPage]
})
export class ShopPageModule {}
