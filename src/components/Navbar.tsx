import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <ShoppingCart className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Digital Store</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          <Link to="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Beranda
          </Link>
          <Link to="/produk" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Produk
          </Link>
          <Button asChild size="sm">
            <Link to="/produk">Beli Sekarang</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t bg-background px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-3 pt-3">
            <Link to="/" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground">
              Beranda
            </Link>
            <Link to="/produk" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground">
              Produk
            </Link>
            <Button asChild size="sm" className="w-full" onClick={() => setOpen(false)}>
              <Link to="/produk">Beli Sekarang</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
