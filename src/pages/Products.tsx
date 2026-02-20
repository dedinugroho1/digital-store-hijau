import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/products";
import { Button } from "@/components/ui/button";

const Products = () => {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h1 className="mb-3 text-3xl font-bold md:text-4xl">Semua Produk Digital</h1>
          <p className="text-muted-foreground">Temukan produk digital yang sesuai dengan kebutuhan Anda</p>
        </div>

        {/* Filter */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <Button
              key={c.value}
              variant={active === c.value ? "default" : "outline"}
              size="sm"
              onClick={() => setActive(c.value)}
            >
              {c.label}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="py-12 text-center text-muted-foreground">Belum ada produk untuk kategori ini.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
