import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, Download, Shield, Zap, Star } from "lucide-react";
import heroImage from "@/assets/hero-digital.png";

const benefits = [
  { icon: Download, title: "Akses Instan", desc: "Download langsung setelah pembayaran berhasil." },
  { icon: Zap, title: "Update Gratis", desc: "Dapatkan pembaruan konten secara gratis selamanya." },
  { icon: Shield, title: "Garansi 30 Hari", desc: "Uang kembali 100% jika tidak puas dalam 30 hari." },
  { icon: CheckCircle, title: "Kualitas Terjamin", desc: "Dibuat oleh para praktisi dan profesional terbaik." },
];

const testimonials = [
  { name: "Rina Maharani", role: "Digital Marketer", text: "Produk digitalnya sangat berkualitas! Ebook digital marketing-nya langsung bisa saya praktikkan dan hasilnya luar biasa.", rating: 5 },
  { name: "Budi Santoso", role: "UI/UX Designer", text: "Kelas UI/UX nya sangat lengkap dan mudah dipahami. Worth it banget dengan harganya!", rating: 5 },
  { name: "Sari Dewi", role: "Freelancer", text: "Template Notion-nya mengubah cara saya bekerja. Produktivitas meningkat drastis. Sangat recommended!", rating: 5 },
];

const faqs = [
  { q: "Bagaimana cara mendapatkan produk setelah pembayaran?", a: "Setelah pembayaran berhasil, Anda akan menerima link download melalui email dan WhatsApp yang terdaftar." },
  { q: "Apakah ada garansi uang kembali?", a: "Ya! Kami menyediakan garansi 30 hari uang kembali jika Anda tidak puas dengan produk yang dibeli." },
  { q: "Bisakah produk digunakan untuk keperluan komersial?", a: "Tergantung lisensi produk. Silakan baca deskripsi produk untuk informasi lisensi yang berlaku." },
  { q: "Apakah ada diskon untuk pembelian bundle?", a: "Ya, kami sering menawarkan promo bundle dengan diskon hingga 50%. Pantau terus halaman produk kami!" },
];

const Index = () => {
  const featuredProducts = products.filter((p) => p.badge).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="container mx-auto flex flex-col items-center gap-8 px-4 py-20 md:flex-row md:py-28">
          <div className="flex-1 text-center md:text-left">
            <h1 className="mb-4 text-4xl font-extrabold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Tingkatkan Skill Anda dengan Produk Digital Terbaik
            </h1>
            <p className="mb-8 text-lg text-primary-foreground/80 md:text-xl">
              Ebook, kursus online, template, dan tools berkualitas tinggi untuk membantu Anda berkembang lebih cepat.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-base font-semibold"
              >
                <Link to="/produk">Lihat Produk</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base"
              >
                <a href="#manfaat">Pelajari Lebih Lanjut</a>
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <img
              src={heroImage}
              alt="Digital Products"
              className="animate-float w-full max-w-lg rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="manfaat" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold">Mengapa Memilih Digital Store?</h2>
            <p className="text-muted-foreground">Keunggulan berbelanja produk digital di tempat kami</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-xl border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                  <b.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="mb-2 font-semibold">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold">Produk Unggulan</h2>
            <p className="text-muted-foreground">Produk digital terlaris dan paling direkomendasikan</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild size="lg">
              <Link to="/produk">Lihat Semua Produk</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold">Apa Kata Mereka?</h2>
            <p className="text-muted-foreground">Testimoni pelanggan yang sudah merasakan manfaatnya</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-xl border bg-card p-6 shadow-sm">
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-badge-best text-badge-best" />
                  ))}
                </div>
                <p className="mb-4 text-sm text-muted-foreground">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-card-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto max-w-2xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold">Pertanyaan Umum</h2>
            <p className="text-muted-foreground">Jawaban atas pertanyaan yang sering diajukan</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-medium">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
            Siap Meningkatkan Skill Anda?
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/80">
            Jangan lewatkan kesempatan untuk mendapatkan produk digital berkualitas dengan harga terbaik.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-base font-semibold">
            <Link to="/produk">Mulai Belanja Sekarang</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
