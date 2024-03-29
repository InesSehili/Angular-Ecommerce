import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {HttpClientModule} from  '@angular/common/http';
import { ProductService } from './services/product.service';
import { Routes , RouterModule} from '@angular/router';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes : Routes = [
  {path: 'search/:keyword', component: ProductListComponent},
  {path : 'category/:id', component:ProductListComponent},
  {path : 'category', component:ProductListComponent},
  {path : 'products', component:ProductListComponent},
  {path: 'products/:id', component : SingleProductComponent },
  {path : '', redirectTo: '/products', pathMatch: 'full'},
  {path : '**', redirectTo: '/products', pathMatch: 'full'},


];
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    SingleProductComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
