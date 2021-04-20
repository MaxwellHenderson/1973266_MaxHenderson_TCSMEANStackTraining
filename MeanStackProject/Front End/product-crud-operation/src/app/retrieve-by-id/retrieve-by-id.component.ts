import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-retrieve-by-id',
  templateUrl: './retrieve-by-id.component.html',
  styleUrls: ['./retrieve-by-id.component.css'],
})
export class RetrieveByIdComponent implements OnInit {
  resultMsg?: string;

  constructor(public productSer: ProductService) {}

  ngOnInit(): void {}

  searchDetails(id: any) {
    console.log('ID is ' + id);
    this.productSer.retrieveProductById(id).subscribe((result) => {
      console.log(result);
      if (result?.length > 0) {
        let product = result[0];
        this.resultMsg =
          'id is ' +
          product._id +
          ' Product Name ' +
          product.pname +
          ' Price ' +
          product.price;
      } else {
        this.resultMsg = 'Product with that id does not exist';
      }
    });
  }
}
