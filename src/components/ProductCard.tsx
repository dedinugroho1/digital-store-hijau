import { Link } from "react-router-dom";
import { type Product, formatPrice } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => (
  <div className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-lg">
    <div className="relative overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      {product.badge && (
        <Badge
          className={`absolute left-3 top-3 ${
            product.badge === "best-seller"
              ? "bg-badge-best text-foreground hover:bg-badge-best"
              : "bg-badge-promo text-primary-foreground hover:bg-badge-promo"
          }`}
        >
          {product.badge === "best-seller" ? "Best Seller" : "Promo"}
        </Badge>
      )}
    </div>
    <div className="flex flex-col gap-2 p-4">
      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {product.category}
      </span>
      <h3 className="line-clamp-2 font-semibold leading-snug text-card-foreground">{product.name}</h3>
      <p className="line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
      <div className="mt-1 flex items-center gap-2">
        <span className="text-lg font-bold text-primary">{formatPrice(product.price)}</span>
        {product.originalPrice && (
          <span className="text-sm text-muted-foreground line-through">
            {formatPrice(product.originalPrice)}
          </span>
        )}
      </div>
      <Button asChild className="mt-2 w-full" size="sm">
        <Link to={`/checkout?product=${product.id}`}>Beli Sekarang</Link>
      </Button>
    </div>
  </div>
);

export default ProductCard;
