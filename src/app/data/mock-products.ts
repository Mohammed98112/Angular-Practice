import { Product } from '../models/product';

// A tiny placeholder-image generator — an inline SVG data URI, so photos
// render with zero network dependency (no backend, no image CDN, nothing
// that can fail in a classroom with spotty wifi). Swap `photo` for a real
// image URL once this becomes a real API-backed catalog.
function placeholderImage(label: string, color: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">
    <rect width="400" height="300" fill="${color}" />
    <text x="200" y="150" font-family="sans-serif" font-size="24" fill="#fff"
          text-anchor="middle" dominant-baseline="middle">${label}</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

// Hardcoded data for this step — no backend yet. This lives in its own file
// specifically so that a future step can delete just this file (and the one
// line in ProductService that imports it) to switch to a real API, without
// touching any component.
export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 59.99,
    photo: placeholderImage('Headphones', '#2563eb'),
    description:
      'Over-ear wireless headphones with active noise cancellation, 30-hour battery life, and a padded headband for all-day comfort.',
    stock: 24,
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 129.0,
    photo: placeholderImage('Smart Watch', '#7c3aed'),
    description:
      'Fitness-tracking smart watch with heart-rate monitoring, sleep tracking, and a 5-day battery life. Compatible with iOS and Android.',
    stock: 12,
  },
  {
    id: 3,
    name: 'Mechanical Keyboard',
    price: 89.5,
    photo: placeholderImage('Keyboard', '#059669'),
    description:
      'Full-size mechanical keyboard with hot-swappable switches, per-key RGB lighting, and a durable aluminum frame.',
    stock: 8,
  },
  {
    id: 4,
    name: 'Portable Speaker',
    price: 39.99,
    photo: placeholderImage('Speaker', '#d97706'),
    description:
      'Compact Bluetooth speaker with 12 hours of playback, IPX7 waterproofing, and surprisingly deep bass for its size.',
    stock: 0,
  },
];
