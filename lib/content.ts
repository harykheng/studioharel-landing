// All landing page copy lives here so text, prices and links can be updated
// without touching the section components.

export type Img = { src: string; alt: string; width: number; height: number };
export type DemoLink = { label: string; href: string; project: string };

export const work = {
  dashboard: [
    { src: "/work/dashboard-utama.png", alt: "Harel ERP untuk distributor: dashboard utama dengan tren penjualan, piutang, dan stok kritis", width: 1788, height: 1122 },
    { src: "/work/dashboard-laba-rugi.png", alt: "Harel ERP: laporan laba rugi per kategori produk", width: 1799, height: 1124 },
    { src: "/work/dashboard-order.png", alt: "Harel ERP: daftar order penjualan dengan status pengiriman", width: 1798, height: 1125 },
    { src: "/work/dashboard-produk.png", alt: "Harel ERP: katalog produk dengan harga dan status stok", width: 1788, height: 1123 },
  ],
  kedaiKopi: { src: "/work/kedai-kopi-order.png", alt: "Harel ERP untuk kedai kopi: papan status order dari baru sampai selesai", width: 1797, height: 1121 },
  landingDigital: { src: "/work/landing-digital-product.png", alt: "Landing page produk digital untuk mencatat untung rugi toko", width: 1797, height: 1125 },
  landingSkincare: { src: "/work/landing-skincare.png", alt: "Landing page brand skincare Arunika", width: 1799, height: 1125 },
  ordi: [
    { src: "/work/ordi-pickup.png", alt: "Ordi Cafe: pilih pickup atau delivery", width: 485, height: 1054 },
    { src: "/work/ordi-tanggal.png", alt: "Ordi Cafe: pilih tanggal delivery", width: 485, height: 1052 },
    { src: "/work/ordi-menu.png", alt: "Ordi Cafe: daftar menu", width: 484, height: 1053 },
    { src: "/work/ordi-varian.png", alt: "Ordi Cafe: pilih ukuran, varian, dan jumlah", width: 483, height: 1051 },
    { src: "/work/ordi-pesanan.png", alt: "Ordi Cafe: detail pesanan, ongkir, dan bayar via QRIS", width: 483, height: 1051 },
  ],
  wedding: [
    { src: "/work/undangan-pembuka.png", alt: "Undangan pernikahan online: halaman pembuka", width: 485, height: 1053 },
    { src: "/work/undangan-cerita.png", alt: "Undangan pernikahan online: cerita dan galeri foto", width: 486, height: 1054 },
    { src: "/work/undangan-acara.png", alt: "Undangan pernikahan online: jadwal akad dan resepsi dengan tombol lokasi", width: 486, height: 1053 },
  ],
} satisfies Record<string, Img | Img[]>;

/** The three Ordi screens shown together: choose, browse, customise. */
export const ordiScreens = [work.ordi[0], work.ordi[2], work.ordi[3]];

export const demos = {
  ordi: { label: "Coba demo", href: "https://ordistore.studioharel.id", project: "Ordi Cafe" },
  distribusi: { label: "Demo distribusi", href: "https://erp-distributor.vercel.app/", project: "Stock Management - Distribusi" },
  kedaiKopi: { label: "Demo kedai kopi", href: "https://erp-demo-lovat.vercel.app/", project: "Stock Management - Kedai Kopi" },
  digitalProduct: { label: "Demo digital product", href: "https://porto-studio-harel.vercel.app/", project: "Landing Page - Digital Product" },
  skincare: { label: "Demo skincare", href: "https://landing-page-skincare.netlify.app/", project: "Landing Page - Skincare" },
  wedding: { label: "Demo undangan", href: "https://wedding-invitation.studioharel.id/", project: "Wedding Invitation" },
} satisfies Record<string, DemoLink>;

/** Work shown in the gallery: a desktop screenshot, or phone screens side by side. */
export const works: { name: string; category: string; image?: Img; phones?: Img[]; links: DemoLink[] }[] = [
  { name: "Ordi Cafe", category: "Pemesanan online · FnB", phones: ordiScreens, links: [demos.ordi] },
  {
    name: "Dashboard stok & invoice",
    category: "Sistem · Gudang & distributor",
    image: work.dashboard[0],
    links: [demos.distribusi, demos.kedaiKopi],
  },
  {
    name: "Landing page produk",
    category: "Jualan · Order via WhatsApp",
    image: work.landingDigital,
    links: [demos.digitalProduct, demos.skincare],
  },
  { name: "Undangan pernikahan", category: "Website · Galeri & detail acara", phones: work.wedding, links: [demos.wedding] },
];

export type Service = {
  name: string;
  summary: string;
  /** Leave undefined until the "mulai dari" price is decided; the row then shows a fallback label. */
  price?: string;
};

export const PRICE_FALLBACK = "Tanya estimasi";

export const services: Service[] = [
  { name: "Landing page", summary: "Satu halaman untuk jualan atau profil usaha, ringan dibuka dari HP, dengan tombol order ke WhatsApp." },
  {
    name: "Order online via WhatsApp",
    summary: "Menu, keranjang, pickup atau delivery, lalu pesanan masuk ke WhatsApp dalam format yang rapi.",
  },
  { name: "Dashboard stok & invoice", summary: "Stok masuk dan keluar, faktur, stock opname, laporan laba rugi dan piutang." },
  {
    name: "Undangan pernikahan online",
    summary: "Galeri foto, detail akad dan resepsi, dan tombol lihat lokasi. Tinggal kirim link ke tamu.",
  },
  { name: "Website custom", summary: "Booking, antrian, atau sistem lain yang belum ada di daftar ini." },
];

export const steps = [
  { title: "Konsultasi", text: "Ceritakan usaha, alur kerja, dan kebutuhanmu lewat WhatsApp.", result: "daftar kebutuhan" },
  { title: "Estimasi & desain", text: "Estimasi waktu dan biaya dikirim di awal, lalu desain untuk kamu cek.", result: "estimasi dan desain awal" },
  { title: "Pengembangan", text: "Kode ditulis dari nol. Kamu dapat link preview untuk dicoba di HP.", result: "versi preview" },
  { title: "Revisi", text: "Perubahan dikerjakan sampai sesuai cara kerja usahamu.", result: "versi final" },
  { title: "Live", text: "Website online dan siap dipakai jualan.", result: "website live" },
];

export const faqs = [
  {
    q: "Berapa lama pengerjaannya?",
    a: "Tergantung kebutuhan. Estimasi waktu dan biaya kami kirim di awal, sebelum pengerjaan dimulai.",
  },
  {
    q: "Apakah pakai template?",
    a: "Tidak. Semua dibangun dari custom code, menyesuaikan cara kerja usahamu.",
  },
  {
    q: "Kalau butuh perubahan kecil setelah live?",
    a: "Kirim saja lewat WhatsApp. Perubahan kecil kami respons dengan cepat.",
  },
  {
    q: "Berapa biayanya?",
    a: "Harga disesuaikan dengan kebutuhan dan tetap masuk akal untuk UMKM. Ceritakan kebutuhanmu, kami balas dengan estimasi.",
  },
];

export const contact = {
  email: "contact@studioharel.id",
  phoneDisplay: "+62 812-9256-7788",
  instagram: { handle: "@studioharel.id", href: "https://instagram.com/studioharel.id" },
};
