import { Component, OnInit } from '@angular/core';
import { Product } from '../model.product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-retrieve-product',
  templateUrl: './retrieve-product.component.html',
  styleUrls: ['./retrieve-product.component.css'],
})
export class RetrieveProductComponent implements OnInit {
  products?: Array<Product>;
  constructor(public productSer: ProductService) {}

  ngOnInit(): void {
    this.productSer
      .retrieveAllProductDetails()
      .subscribe((result) => (this.products = result));
  }
}
