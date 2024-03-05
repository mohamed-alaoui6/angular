import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { product } from '../products/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products! : Array<any>;
  constructor() {
    this.products=[
      {id:1 , name:"Samsung Galaxy S21" , price:4799.00,description:"8G/256GB SM-G990ELVGMWD - Violet",quantite:100,url_image:"Samsung Galaxy S21.jpg",qeerebyasali:false},
      {id:2 , name:"Samsung Galaxy S21 5G" , price:3999.00,description:" (128Go, 8Go) Dynamic AMOLED 120Hz - Blanc",quantite:25,url_image:"Samsung Galaxy S21 5G.jpg",qeerebyasali:false},
      {id:3 , name:"Apple Watch Series 9" , price:4400.00,description:"Écran Retina toujours activé plus lumineux constitué d’un verre plus solide que jamais",quantite:200,url_image:"Apple Watch Series 9.png",qeerebyasali:false},
      {id:4 , name:"iPhone 15 Pro" , price:15490.00,description:"Stockage: 128 Go ,Camera: 48MP principal, 12MP Ultra grand-angle 12MP avec zoom optique 3x",quantite:7,url_image:"15 pro.jpg",qeerebyasali:false},
      {id:5 , name:"Smart TV (2023)" , price:5400.00,description:"Samsung 40″ Curved Smart TV  40J6370  Noir & Argent",quantite:8,url_image:"iPhone 15 Pro.jpg",qeerebyasali:false}
     
    ]  

   }
   public getAllProduct() : Observable<product[]>{
    return of(this.products);
   }
   getImageURL(p : product):string{
    return "assets/images/"+p.url_image;
  }
   public buying(p:product):Observable<boolean>{
    --p.quantite;
    return of(true)
   }
   public deleteProduct(id:number):Observable<boolean>{
    this.products=this.products.filter(p=>p.id!=id);
    return of(true);
   }

}
