import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';
import { ProductRep } from '../services/api/models/product-rep';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}
  param: any;

  data: ProductRep[] | [] = [];

  ngOnInit(): void {
    // this.param = this.activatedRoute.snapshot.queryParams['limit'];
    // this.productService.getPaginatedProducts(this.param).subscribe({
    //   next: (res) => {
    //     this.data = res;
    //   },
    // });

    const product: ProductRep = {
      title: 'Title',
      category: 'Furniture',
      description: 'Lorem Ipsum',
      id: 929,
      image: '',
      price: 30.21,
      rating: {
        count: 120,
        rate: 4.5,
      },
    };

    this.productService.createProduct(product).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error: HttpErrorResponse) => {
        if (error instanceof ErrorEvent) {
          console.error('An error occured!', error);
        } else {
          console.error(
            `Server returned status code ${error.status}, error message: ${error.message}`
          );
        }
      },
    });
  }
}
