import { Component } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import { MOCK_PRODUCTS } from '../../data/mock-products';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  // Just the hardcoded array, straight from the data file — no service,
  // no signal wrapper. A plain component property, same as any TypeScript class.
  products = MOCK_PRODUCTS;
}
