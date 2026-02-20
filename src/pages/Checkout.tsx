import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products, formatPrice } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const paymentMethods = [
  { value: "transfer", label: "Transfer Bank (BCA, Mandiri, BNI)" },
  { value: "ewallet", label: "E-Wallet (GoPay, OVO, Dana)" },
  { value: "qris", label: "QRIS" },
];

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("product");
  const product = products.find((p) => p.id === productId);
  const { toast } = useToast();

  const [form, setForm] = useState({ name: "", email: "", whatsapp: "" });
  const [payment, setPayment] = useState("transfer");
  const [submitted, setSubmitted] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 py-20">
          <p className="text-muted-foreground">Produk tidak ditemukan.</p>
          <Button asChild variant="outline">
            <Link to="/produk">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Produk
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.whatsapp) {
      toast({ title: "Lengkapi semua data", description: "Semua field harus diisi.", variant: "destructive" });
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-4 py-20">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold">Pesanan Berhasil!</h1>
          <p className="text-center text-muted-foreground">
            Terima kasih, {form.name}! Detail pembayaran telah dikirim ke email <strong>{form.email}</strong> dan WhatsApp <strong>{form.whatsapp}</strong>.
          </p>
          <Button asChild>
            <Link to="/">Kembali ke Beranda</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <Button asChild variant="ghost" size="sm" className="mb-6">
          <Link to="/produk">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Produk
          </Link>
        </Button>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <h1 className="mb-6 text-2xl font-bold">Checkout</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="rounded-xl border bg-card p-6">
                <h2 className="mb-4 font-semibold">Data Pembeli</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input id="name" placeholder="Masukkan nama lengkap" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="contoh@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div>
                    <Label htmlFor="wa">No. WhatsApp</Label>
                    <Input id="wa" placeholder="08xxxxxxxxxx" value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} />
                  </div>
                </div>
              </div>

              <div className="rounded-xl border bg-card p-6">
                <h2 className="mb-4 font-semibold">Metode Pembayaran</h2>
                <RadioGroup value={payment} onValueChange={setPayment} className="space-y-3">
                  {paymentMethods.map((m) => (
                    <div key={m.value} className="flex items-center gap-3 rounded-lg border p-3 transition-colors hover:bg-muted">
                      <RadioGroupItem value={m.value} id={m.value} />
                      <Label htmlFor={m.value} className="cursor-pointer font-normal">{m.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <Button type="submit" size="lg" className="w-full text-base font-semibold">
                Bayar Sekarang
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 rounded-xl border bg-card p-6">
              <h2 className="mb-4 font-semibold">Ringkasan Pesanan</h2>
              <div className="mb-4 overflow-hidden rounded-lg">
                <img src={product.image} alt={product.name} className="h-40 w-full object-cover" />
              </div>
              <h3 className="mb-1 font-semibold">{product.name}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{product.description}</p>
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Harga</span>
                  {product.originalPrice ? (
                    <div className="text-right">
                      <span className="text-sm text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
                      <span className="ml-2 text-lg font-bold text-primary">{formatPrice(product.price)}</span>
                    </div>
                  ) : (
                    <span className="text-lg font-bold text-primary">{formatPrice(product.price)}</span>
                  )}
                </div>
                <div className="mt-3 flex items-center justify-between border-t pt-3">
                  <span className="font-semibold">Total</span>
                  <span className="text-xl font-bold text-primary">{formatPrice(product.price)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
