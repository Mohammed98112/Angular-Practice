import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MOCK_PRODUCTS } from '../../data/mock-products';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  // withComponentInputBinding() (set up in app.config.ts) requires a route
  // param to bind to a signal input — this is the one signal in this whole
  // simplified version, and it's required by the router itself, not chosen.
  id = input.required<string>();

  // A plain getter, not a signal or a service call. Angular re-reads this
  // every time it checks the template, so it always reflects the current id().
  get product() {
    return MOCK_PRODUCTS.find((p) => p.id === Number(this.id()));
  }
}
