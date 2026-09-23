import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/product';

// A "dumb" presentational component — it receives a product and shows it.
// It has no idea where the product came from (the list page, the service,
// eventually an API) and doesn't need to.
@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  // A signal input — this component's "prop", fed by whichever parent uses it.
  product = input.required<Product>();
}
