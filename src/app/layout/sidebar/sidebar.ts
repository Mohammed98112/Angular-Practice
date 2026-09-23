import { Component } from '@angular/core';

// Purely presentational for this step — a static list of categories with no
// click behavior yet. A future step ("state changing") is what turns this
// into a real filter wired up to ProductService.
@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  readonly categories = ['All Products', 'Audio', 'Wearables', 'Accessories'];
}
