import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
  product:any={}
  constructor( private activatedRoute: ActivatedRoute, private _productsService : ProductsService) {
    this.activatedRoute.params.subscribe(params =>{
      this.product = this._productsService.getProductDetail(params['id']);
      console.log(this.product);
    })
   }

  ngOnInit(): void {
  }

}

