import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  product : Product | undefined ;
  constructor(private productService : ProductService, private route :ActivatedRoute) {}
  ngOnInit(): void {
    const id : number = +this.route.snapshot.paramMap.get('id')!;
    this.productService.getProductById(id).subscribe(
      (data => this.product = data)
    )
    
  }


}
