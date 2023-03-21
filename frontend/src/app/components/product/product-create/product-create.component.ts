import { Product } from './product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent  implements OnInit {  

  Product: Product ={
    name: 'Produto de teste',
    price: 125.98
  }

    constructor(private ProductService: ProductService,
        private router: Router) { }

    ngOnInit(): void {
      
    }
    
    createProduct(): void {
      this.ProductService.create(this.Product).subscribe(() => {
      this.ProductService.showMessage('Produto criado!')
      this.router.navigate(['/products'])
    })
    
  }
    cancel(): void {
      this.router.navigate(['/products'])
    }
  }
