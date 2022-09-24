import { Component, OnInit } from "@angular/core";
import { Product,ProductsService } from "src/app/services/products.service";

@Component({
    selector: 'about-component',
    templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit{
    products:Product[]=[];
    viewProduct:Product[]=[];
    constructor(private _productsService: ProductsService){
        console.log('About working successfully')
    }
    ngOnInit(): void {
        this.products= this._productsService.getProducts();
    }
    getImage(id:number){
        return this.viewProduct = this.products.filter(p=>p.id===id)
        console.log(this.viewProduct)
    }
}
