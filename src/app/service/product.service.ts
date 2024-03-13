import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

import { product } from '../products/product';
import { error } from 'node:console';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://127.0.0.1:5984/mydata'; // Assuming your CouchDB URL is up to this point

  constructor(private http: HttpClient) {}

  public getAllProduct(): Observable<product[]> {
    const url = `${this.baseUrl}/_all_docs?include_docs=true`;
    return this.http.get<any>(url).pipe(
      map(response => response.rows.map((row: { doc: any }) => new product(
        row.doc.id,
        row.doc.name,
        row.doc.price,
        row.doc.url_image,
        row.doc.quantite,
        row.doc.description,
        row.doc.qeerebyasali,
        row.doc.rev
      )))
    );
  }

  getImageURL(p: product): string {
    return "assets/images/" + p.url_image;
  }

  public buying(p: product): Observable<boolean> {
    --p.quantite;
    // You might want to update the product quantity on the server here
    if (p.quantite === 0) {
      return this.deleteProduct(p.id);
    }
    return of(true);
  }

  public deleteProduct(id: number): Observable<boolean> {
    const url = `${this.baseUrl}/${id}`;

    return this.http.delete(url)
      .pipe(
        catchError((error: any): Observable<boolean> => {
          console.error('Error deleting product:', error);
          return of(false);
        }) as any  // Casting to any to satisfy TypeScript
      );
  }
      
}
