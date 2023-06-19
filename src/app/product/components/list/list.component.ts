import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  products : Product[] = [];

  constructor( private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(resp => this.products = resp );
  }
}
