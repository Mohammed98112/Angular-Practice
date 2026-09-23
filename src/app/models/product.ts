// The shape of a product. A plain TypeScript interface — no decorator, no
// Angular-specific code — the exact same role as a C# DTO/record.
export interface Product {
  id: number;
  name: string;
  price: number;
  photo: string;
  description: string;
  stock: number;
}
