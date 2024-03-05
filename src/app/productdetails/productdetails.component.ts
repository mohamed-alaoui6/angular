import { Component, EventEmitter, Input,Output } from '@angular/core';
import { product } from '../products/product';
import { ProductService } from '../service/product.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {


  @Input() p!:product;
  @Output() buyEvent = new EventEmitter();
  showDetails: boolean = false;

  toggleDetails(p:product): void {
    this.showDetails = !this.showDetails; // Inverser l'état de l'affichage des détails
  }

  buying() {
    return this.buyEvent.emit(this.p);
   }
 

getImageURL(p : product):string{
  return "assets/images/"+p.url_image;
}

}
