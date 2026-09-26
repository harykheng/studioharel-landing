// All landing page copy lives here so text, prices and links can be updated
// without touching the section components.

export type Img = { src: string; alt: string; width: number; height: number };
export type DemoLink = { label: string; href: string; project: string };

export const proof = [
  { value: "6 tahun", label: "React di Tiket.com" },
  { value: "6 proyek", label: "sudah live" },
  { value: "100%", label: "kode dibuat dari nol" },
];

export const liveProjects = [
  "Ordi Cafe",
  "ERP Distribusi",
  "Kedai Kopi",
  "Digital Product",
  "Skincare",
  "Wedding Invitation",
];

export const work = {
  dashboard: { src: "/work/dashboard-stok.jpg", alt: "Dashboard laporan laba rugi untuk distributor", width: 1118, height: 842 },
  landing: { src: "/work/landing-digital-product.jpg", alt: "Landing page penjualan produk digital", width: 910, height: 810 },
  wedding: { src: "/work/undangan-pernikahan.jpg", alt: "Website undangan pernikahan dengan galeri foto", width: 1234, height: 804 },
  ordi: [
    { src: "/work/ordi-1.jpg", alt: "Ordi Cafe: pilih pickup atau delivery", width: 388, height: 858 },
    { src: "/work/ordi-2.jpg", alt: "Ordi Cafe: pilih tanggal pickup", width: 386, height: 858 },
    { src: "/work/ordi-3.jpg", alt: "Ordi Cafe: daftar menu", width: 386, height: 858 },
    { src: "/work/ordi-4.jpg", alt: "Ordi Cafe: atur ukuran dan jumlah", width: 386, height: 858 },
    { src: "/work/ordi-5.jpg", alt: "Ordi Cafe: detail pesanan dan kirim via WhatsApp", width: 384, height: 858 },
  ],
} satisfies Record<string, Img | Img[]>;

export const demos = {
  ordi: { label: "Coba demo Ordi Cafe", href: "https://ordistore.studioharel.id", project: "Ordi Cafe" },
  distribusi: { label: "Demo Distribusi", href: "https://erp-distributor.vercel.app/", project: "Stock Management - Distribusi" },
  kedaiKopi: { label: "Demo Kedai Kopi", href: "https://erp-demo-lovat.vercel.app/", project: "Stock Management - Kedai Kopi" },
  digitalProduct: { label: "Demo Digital Product", href: "https://porto-studio-harel.vercel.app/", project: "Landing Page - Digital Product" },
  skincare: { label: "Demo Skincare", href: "https://landing-page-skincare.netlify.app/", project: "Landing Page - Skincare" },
  wedding: { label: "Demo undangan", href: "https://wedding-invitation.studioharel.id/", project: "Wedding Invitation" },
} satisfies Record<string, DemoLink>;

export const problems = [
  {
    quote: "Belum punya website, calon customer susah percaya toko kami serius.",
    solution: "Landing page yang cepat dibuka dari HP, dengan tombol order langsung ke WhatsApp.",
    service: "Landing page",
  },
  {
    quote: "Udah punya website tapi susah diupdate sendiri, harus selalu minta bantuan orang.",
    solution: "Website yang dibuat supaya isinya bisa kamu ubah sendiri.",
    service: "Website custom",
  },
  {
    quote: "Stok dan invoice masih manual di Excel, sering selisih data.",
    solution: "Dashboard stok, faktur, dan laporan yang mengikuti alur kerja gudangmu.",
    service: "Dashboard stok",
  },
  {
    quote: "Mau bikin undangan online, tapi budget vendor terlalu mahal.",
    solution: "Undangan berbasis website dengan galeri foto dan detail acara, dengan harga yang masuk akal.",
    service: "Undangan online",
  },
];

export type Service = {
  name: string;
  summary: string;
  /** Leave undefined until the "mulai dari" price is decided; the list then shows a fallback label. */
  price?: string;
  examples: DemoLink[];
  image?: Img;
};

export const PRICE_FALLBACK = "Tanya estimasi";

export const services: Service[] = [
  {
    name: "Landing page",
    summary: "Satu halaman untuk jualan atau profil usaha. Ringan dibuka dari HP, dengan tombol order langsung ke WhatsApp.",
    examples: [demos.digitalProduct, demos.skincare],
    image: work.landing,
  },
  {
    name: "Order online via WhatsApp",
    summary: "Menu, keranjang, pilih pickup atau delivery, lalu pesanan masuk ke WhatsApp dalam format yang rapi. Cocok untuk FnB lokal yang baru mulai usaha.",
    examples: [demos.ordi],
    image: work.ordi[0],
  },
  {
    name: "Dashboard stok & invoice",
    summary: "Stok masuk dan keluar, faktur, stock opname, laporan laba rugi dan piutang. Alurnya mengikuti cara kerja timmu.",
    examples: [demos.distribusi, demos.kedaiKopi],
    image: work.dashboard,
  },
  {
    name: "Undangan pernikahan online",
    summary: "Galeri foto, detail akad dan resepsi, dan tombol lihat lokasi. Tinggal kirim link ke tamu.",
    examples: [demos.wedding],
    image: work.wedding,
  },
  {
    name: "Website custom",
    summary: "Booking, antrian, atau sistem lain yang belum ada di daftar ini. Ceritakan alurnya, kami hitung estimasinya.",
    examples: [],
  },
];

export const featuredCase = {
  name: "Ordi Cafe",
  facts: [
    { term: "Jenis usaha", value: "Kafe, FnB lokal" },
    { term: "Cocok untuk", value: "FnB lokal yang baru mulai usaha" },
    { term: "Fitur", value: "Menu online, pickup atau delivery, checkout ke WhatsApp" },
    { term: "Status", value: "Live di ordistore.studioharel.id" },
  ],
  screens: [work.ordi[0], work.ordi[2], work.ordi[4]],
  demo: demos.ordi,
};

export const otherCases = [
  {
    name: "Dashboard stok & invoice",
    summary: "Untuk gudang atau distributor yang belum punya dashboard manajemen stok.",
    image: work.dashboard,
    links: [demos.distribusi, demos.kedaiKopi],
  },
  {
    name: "Landing page produk",
    summary: "Untuk jualan produk digital atau barang tertentu, order langsung via WhatsApp.",
    image: work.landing,
    links: [demos.digitalProduct, demos.skincare],
  },
  {
    name: "Undangan pernikahan",
    summary: "Undangan berbasis website, lengkap dengan galeri foto dan detail acara.",
    image: work.wedding,
    links: [demos.wedding],
  },
];

export const steps = [
  { title: "Konsultasi", text: "Ceritakan usaha, alur kerja, dan kebutuhanmu lewat WhatsApp.", result: "Daftar kebutuhan" },
  { title: "Estimasi & desain", text: "Estimasi waktu dan biaya dikirim di awal, lalu desain halaman untuk kamu cek.", result: "Estimasi dan desain awal" },
  { title: "Pengembangan", text: "Kode ditulis dari nol. Kamu dapat link preview untuk dicoba langsung di HP.", result: "Versi preview" },
  { title: "Revisi", text: "Perubahan dikerjakan sampai sesuai dengan cara kerja usahamu.", result: "Versi final" },
  { title: "Live", text: "Website online dan siap dipakai jualan.", result: "Website live" },
];

export const experience = [
  { when: "6 tahun", place: "Tiket.com", text: "Mengerjakan React di platform travel online." },
  { when: "Sekarang", place: "Studio Harel", text: "Membangun website dan sistem untuk UMKM. 6 proyek sudah live." },
];

export const strengths = [
  { title: "Custom code", text: "Dibangun dari custom code, bukan template generik yang dipakai berulang-ulang." },
  { title: "Harga yang fair", text: "Kualitas developer berpengalaman, harga tetap masuk akal untuk UMKM." },
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
