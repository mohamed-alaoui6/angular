import { Routes } from '@angular/router';
import path from 'node:path';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [{path : 'products' , component: ProductsComponent},{path:'productdetails',component:ProductdetailsComponent}
,{path:'login',component:LoginComponent},{path:'',component:LoginComponent}
];
