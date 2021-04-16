import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreProductComponent } from './store-product/store-product.component';
import { RetrieveProductComponent } from './retrieve-product/retrieve-product.component';
import { DeleteProductByIdComponent } from './delete-product-by-id/delete-product-by-id.component';
import { UpdateProductPriceComponent } from './update-product-price/update-product-price.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreProductComponent,
    RetrieveProductComponent,
    DeleteProductByIdComponent,
    UpdateProductPriceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
