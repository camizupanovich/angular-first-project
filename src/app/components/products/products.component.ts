import { Component,OnInit } from "@angular/core";
//service
import { Product, ProductsService } from "src/app/services/products.service";

@Component({
    selector: 'products-component',
    templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit{
    products:Product[]=[];
    constructor( private _productsService:ProductsService){
        console.log('products working successfully')
    }
    ngOnInit(){
        this.products = this._productsService.getProducts();
    }
}