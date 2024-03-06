import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http'

import { product } from '../products/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products! : Array<any>;
  url='http://localhost:3000/api/products';
  constructor(private http : HttpClient) {
     

   }
   public getAllProduct() : Observable<product[]>{
    return this.http.get<product[]>(this.url);
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
