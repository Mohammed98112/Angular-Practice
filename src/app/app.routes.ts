import { Routes } from '@angular/router';
import { ProductList } from './pages/product-list/product-list';
import { ProductDetails } from './pages/product-details/product-details';

export const routes: Routes = [
  { path: '', component: ProductList },
  { path: 'productdetails/:id', component: ProductDetails },
  // Anything unmatched falls back to the home page rather than a dead end.
  { path: '**', redirectTo: '' },
];
