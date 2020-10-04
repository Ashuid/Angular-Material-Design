import { Component } from '@angular/core'
import { ProductService } from './product.service'

@Component ({
    selector: 'products',
    template: `
    <h2>Products</h2>
    <ul>
        <li *ngFor="let product of products">
            <mat-card>
                {{product}}
            </mat-card>
            <p></p>
        </li>
    </ul>
    `
})

export class ProductsComponent {
    products;
    constructor(productService: ProductService){
        this.products = productService.getProducts();
    
    }
}
