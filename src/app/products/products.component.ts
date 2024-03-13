import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { product } from './product';
import { ProductService } from '../service/product.service';
import { error } from 'console';
import { ProductdetailsComponent } from '../productdetails/productdetails.component';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ ProductdetailsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit,OnChanges,OnDestroy {
 
  constructor(private productService:ProductService){

    
  }
  
  errorMessage:string|undefined;
   products! : Array<product>;
ngOnChanges(changes: SimpleChanges): void {
}
ngOnDestroy(): void  { console.log("ondestroy declared! ")}
  getAllProduct(){
    
    
      this.productService.getAllProduct().subscribe({
        next: (data: any) => {
          
          this.products = data;
        },
        error: (err: any) => {
          this.errorMessage = err;
        },
      })
     
  }

ngOnInit(): void {
  console.log("OnInit Declared !!");
  this.getAllProduct();
  
}

deleteProduct(p: product): void {
  this.productService.deleteProduct(p.id).subscribe(
    {
      next: (value: any) => {
        let index = this.products.indexOf(p);
        this.products.splice(index, 1);
      },
      error: (err: any) => {
        console.error('Error deleting product:', err);
        this.errorMessage = 'Error deleting product';
      },
    }
  );
}




buying(p:product) {
    // console.log("yes yes");
  if(p.quantite<=5){
    p.qeerebyasali=true;
  }
  
  //  alert(p.qeerebyasali);
  this.productService.buying(p).subscribe(
    {
      next:(value:any)=> {
      // console.log(p.quantite);
      if(p.quantite===0){
        this.deleteProduct(p);
      }
      
      },
      error:(err:any) =>{
        this.errorMessage=err;
      },
    }
   )

}

};
