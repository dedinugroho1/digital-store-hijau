import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Footer = () => (
  <footer className="border-t bg-secondary">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <ShoppingCart className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold">Digital Store</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Marketplace produk digital terpercaya untuk meningkatkan skill dan produktivitas Anda.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Navigasi</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Beranda</Link>
            <Link to="/produk" className="hover:text-foreground">Produk</Link>
          </div>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Kontak</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span>Email: support@digitalstore.id</span>
            <span>WhatsApp: +62 812-3456-7890</span>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
        © 2026 Digital Store. Semua hak dilindungi.
      </div>
    </div>
  </footer>
);

export default Footer;
