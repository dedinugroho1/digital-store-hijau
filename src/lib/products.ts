export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: "ebook" | "course" | "template" | "tools" | "software";
  image: string;
  badge?: "best-seller" | "promo";
}

export const products: Product[] = [
  {
    id: "1",
    name: "Panduan Lengkap Digital Marketing 2026",
    description: "Pelajari strategi digital marketing terkini dari A-Z. Cocok untuk pemula hingga profesional.",
    price: 149000,
    originalPrice: 299000,
    category: "ebook",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
    badge: "best-seller",
  },
  {
    id: "2",
    name: "Kelas Online: Mastering UI/UX Design",
    description: "30+ jam video tutorial lengkap tentang desain UI/UX modern dengan studi kasus nyata.",
    price: 349000,
    originalPrice: 599000,
    category: "course",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    badge: "promo",
  },
  {
    id: "3",
    name: "Template Notion All-in-One Productivity",
    description: "Template Notion siap pakai untuk manajemen proyek, catatan harian, dan tracking habit.",
    price: 79000,
    category: "template",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=300&fit=crop",
    badge: "best-seller",
  },
  {
    id: "4",
    name: "Social Media Content Toolkit",
    description: "500+ template desain Canva untuk Instagram, TikTok, dan LinkedIn yang siap edit.",
    price: 199000,
    originalPrice: 350000,
    category: "tools",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=300&fit=crop",
    badge: "promo",
  },
  {
    id: "5",
    name: "Ebook: Passive Income dari Produk Digital",
    description: "Cara membangun bisnis produk digital yang menghasilkan income pasif secara konsisten.",
    price: 99000,
    category: "ebook",
    image: "https://images.unsplash.com/photo-1553729459-afe8f2e2ed65?w=400&h=300&fit=crop",
  },
  {
    id: "6",
    name: "Kelas Online: Web Development Fullstack",
    description: "Belajar React, Node.js, dan database dari nol sampai bisa membangun aplikasi lengkap.",
    price: 499000,
    originalPrice: 799000,
    category: "course",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
  },
  {
    id: "7",
    name: "Invoice & Keuangan Excel Template",
    description: "Template Excel profesional untuk invoice, laporan keuangan, dan budgeting UMKM.",
    price: 59000,
    category: "template",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
  },
  {
    id: "8",
    name: "SEO Analyzer Pro",
    description: "Software analisis SEO otomatis untuk meningkatkan ranking website Anda di Google.",
    price: 299000,
    originalPrice: 499000,
    category: "software",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    badge: "best-seller",
  },
];

export const categories = [
  { value: "all", label: "Semua" },
  { value: "ebook", label: "Ebook" },
  { value: "course", label: "Course" },
  { value: "template", label: "Template" },
  { value: "tools", label: "Tools" },
  { value: "software", label: "Software" },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
}
