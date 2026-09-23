import { Component, computed, signal } from '@angular/core';
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

  // Holds whatever the user has typed into the search box.
  searchTerm = signal('');

  // Recomputes automatically whenever searchTerm changes, filtering the
  // products by name (case-insensitive). Falls back to the full list
  // when the box is empty.
  filteredProducts = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    if (!term) {
      return this.products;
    }
    return this.products.filter((product) => product.name.toLowerCase().includes(term));
  });

  onSearchChange(value: string): void {
    this.searchTerm.set(value);
  }
}