"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge, Tag } from "@/components/Badge";
import { Button } from "@/components/Button";
import { QuoteCard } from "@/components/QuoteCard";
import { StatBlock } from "@/components/StatBlock";
import { Reveal } from "@/components/Reveal";
import { Parallax } from "@/components/Parallax";
import { UnderlineHighlight } from "@/components/UnderlineHighlight";

const logoMark = "/assets/logo-mark.png";
const brevaCafeFlow = "/assets/breva-cafe-flow.png";
const stockManagementDashboard = "/assets/wedding-invitation.png";
const landingDigitalProduct = "/assets/landing-digital-product.png";
const weddingInvitation = "/assets/stock-management-dashboard.png";

const openWA = () => window.open("https://wa.me/6281292567788", "_blank", "noopener");
const goPortfolio = () => {
  window.location.hash = "portofolio";
};

const cardStyle: React.CSSProperties = {
  padding: "var(--space-8)",
  borderRadius: "var(--radius-lg)",
  background: "var(--surface-glass)",
  border: "1px solid var(--surface-glass-border)",
  boxShadow: "var(--shadow-card)",
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ background: "var(--surface-page)", minHeight: "100vh", position: "relative" }}>
      {/* Header */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(10,10,12,.72)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div
          style={{
            maxWidth: "var(--container-max)",
            margin: "0 auto",
            padding: "var(--space-3) var(--gutter)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--space-6)",
            fontFamily: "var(--font-sans)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Image src={logoMark} alt="Studio Harel" width={1085} height={492} style={{ height: 26, width: "auto", display: "block" }} />
            <span
              style={{
                fontWeight: 700,
                fontSize: 18,
                letterSpacing: "var(--tracking-tight)",
                color: "var(--text-primary)",
              }}
            >
            </span>
          </div>
          <div className="site-nav-links" style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 13, color: "var(--text-secondary)" }}>
            <a href="#layanan" style={{ color: "inherit" }}>Layanan</a>
            <span style={{ color: "var(--text-tertiary)" }}>&amp;</span>
            <a href="#portofolio" style={{ color: "inherit" }}>Portofolio</a>
            <span style={{ color: "var(--text-tertiary)" }}>&amp;</span>
            <a href="#kontak" style={{ color: "inherit" }}>Kontak</a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button
              type="button"
              className="site-nav-toggle"
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              style={{
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                width: 36,
                height: 36,
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border-subtle)",
                background: "var(--surface-chip)",
                color: "var(--text-primary)",
                cursor: "pointer",
                fontSize: 18,
              }}
            >
              <i className={`ph-bold ${menuOpen ? "ph-x" : "ph-list"}`} />
            </button>
            <Button variant="primary" size="sm" glow onClick={openWA}>
              <i className="ph-bold ph-whatsapp-logo" style={{ fontSize: 16 }} />
              Chat
            </Button>
          </div>
        </div>
        <div className={`site-nav-mobile-panel${menuOpen ? " open" : ""}`}>
          <a href="#layanan" onClick={() => setMenuOpen(false)}>Layanan</a>
          <a href="#portofolio" onClick={() => setMenuOpen(false)}>Portofolio</a>
          <a href="#kontak" onClick={() => setMenuOpen(false)}>Kontak</a>
        </div>
      </div>

      {/* Hero */}
      <section
        id="hero"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          boxSizing: "border-box",
          padding: "var(--space-16) var(--gutter)",
        }}
      >
        <Parallax
          factor={0.12}
          style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: 900,
            height: 900,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 50% 50%, var(--blue-700), var(--blue-600) 40%, transparent 72%)",
            filter: "blur(90px)",
            opacity: 0.55,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <Parallax
          factor={-0.08}
          style={{
            position: "absolute",
            bottom: "-30%",
            left: "-14%",
            width: 640,
            height: 640,
            borderRadius: "50%",
            background: "radial-gradient(circle at 50% 50%, var(--cyan-400), transparent 70%)",
            filter: "blur(100px)",
            opacity: 0.28,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "var(--container-max)", margin: "0 auto", width: "100%" }}>
          <Reveal index={0} style={{ marginBottom: "var(--space-6)" }}>
            <Badge>Digital partner untuk UMKM</Badge>
          </Reveal>

          <Reveal
            index={1}
            as="h1"
            style={{
              margin: "0 0 var(--space-6)",
              fontFamily: "var(--font-sans)",
              fontWeight: "var(--weight-extrabold)" as unknown as number,
              fontSize: "clamp(40px,7vw,var(--text-5xl))",
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-tight)",
              color: "var(--text-primary)",
              maxWidth: "15ch",
              textWrap: "balance",
            }}
          >
            Kami bangun <UnderlineHighlight>website &amp; dashboard</UnderlineHighlight> yang bikin bisnismu{" "}
            <span
              style={{
                fontFamily: "var(--font-serif-display)",
                fontStyle: "italic",
                fontWeight: 400,
                color: "var(--white)",
                textShadow: "0 0 40px rgba(33,197,212,.45)",
              }}
            >
              tumbuh lebih cepat
            </span>
          </Reveal>

          <Reveal
            index={2}
            as="p"
            style={{
              margin: "0 0 var(--space-8)",
              maxWidth: "48ch",
              fontSize: "var(--text-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--text-secondary)",
              textWrap: "pretty",
            }}
          >
            Website dan dashboard yang dibangun sesuai kebutuhan bisnismu. Tampilan dan fitur menyesuaikan cara kerja bisnismu, bukan sebaliknya.
          </Reveal>

          <Reveal index={3} style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-4)" }}>
            <Button variant="primary" size="lg" onClick={openWA}>
              Chat via WhatsApp
            </Button>
            <Button variant="secondary" size="lg" onClick={goPortfolio}>
              Lihat Portofolio
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Masalah */}
      <section id="masalah" style={{ position: "relative", overflow: "hidden", padding: "var(--space-32) var(--gutter)", boxSizing: "border-box" }}>
        <Parallax
          factor={0.1}
          style={{
            position: "absolute",
            top: "-10%",
            left: "50%",
            width: 1000,
            height: 1000,
            borderRadius: "50%",
            background: "radial-gradient(circle at 50% 50%, var(--blue-700), var(--blue-600) 35%, transparent 70%)",
            filter: "blur(110px)",
            opacity: 0.5,
            pointerEvents: "none",
            zIndex: 0,
            transform: "translateX(-50%)",
          }}
        />
        <Parallax
          factor={-0.06}
          style={{
            position: "absolute",
            bottom: "-10%",
            left: "20%",
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "radial-gradient(circle,var(--cyan-400),transparent 70%)",
            filter: "blur(100px)",
            opacity: 0.22,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 960,
            margin: "0 auto",
            minHeight: 620,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Reveal
            index={0}
            style={{
              marginBottom: "var(--space-8)",
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-xs)",
              letterSpacing: "var(--tracking-widest)",
              textTransform: "uppercase",
              color: "var(--text-tertiary)",
              maxWidth: "40ch",
              lineHeight: "var(--leading-relaxed)",
            }}
          >
            DI STUDIO HAREL, KAMI PERCAYA SETIAP UMKM PUNYA CERITA MASALAH YANG BERBEDA, DAN KAMI PUNYA SOLUSINYA
          </Reveal>

          <Reveal
            index={1}
            as="h2"
            style={{
              margin: 0,
              fontFamily: "var(--font-sans)",
              fontWeight: "var(--weight-extrabold)" as unknown as number,
              fontSize: "clamp(30px,5.4vw,58px)",
              lineHeight: 1.18,
              letterSpacing: "var(--tracking-tight)",
              color: "var(--text-primary)",
            }}
          >
            Beberapa masalah ini
            <br />
            <span
              style={{
                fontFamily: "var(--font-serif-display)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(38px, 7.2vw, 76px)",
                color: "var(--white)",
                textShadow: "rgba(33, 197, 212, 0.55) 0px 0px 50px",
                display: "inline-block",
                margin: "8px 0",
              }}
            >
              (familiar)?
            </span>
            <br />
            kalian gak sendiri
          </Reveal>

          <Reveal index={2} className="masalah-card masalah-card-1">
            <Parallax factor={0.07} disableBelow={860}>
              <QuoteCard icon="ph-storefront" quote="Belum punya website, calon customer susah percaya toko kami serius" />
            </Parallax>
          </Reveal>
          <Reveal index={3} className="masalah-card masalah-card-2">
            <Parallax factor={-0.05} disableBelow={860}>
              <QuoteCard icon="ph-wrench" quote="Udah punya website tapi susah diupdate sendiri, harus selalu minta bantuan orang" />
            </Parallax>
          </Reveal>
          <Reveal index={4} className="masalah-card masalah-card-3">
            <Parallax factor={-0.08} disableBelow={860}>
              <QuoteCard icon="ph-receipt" quote="Butuh sistem stok & invoice tapi masih manual di Excel, sering selisih data" />
            </Parallax>
          </Reveal>
          <Reveal index={5} className="masalah-card masalah-card-4">
            <Parallax factor={0.09} disableBelow={860}>
              <QuoteCard icon="ph-heart" quote="Mau bikin undangan online tapi budget vendor terlalu mahal" />
            </Parallax>
          </Reveal>
        </div>
      </section>

      {/* Layanan */}
      <section id="layanan" style={{ position: "relative", maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-24) var(--gutter)", zIndex: 1 }}>
        <Reveal index={0} style={{ marginBottom: "var(--space-16)" }}>
          <Badge>Layanan</Badge>
          <h2
            style={{
              margin: "var(--space-4) 0 0",
              fontFamily: "var(--font-sans)",
              fontWeight: "var(--weight-extrabold)" as unknown as number,
              fontSize: "clamp(28px,4.4vw,var(--text-3xl))",
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-tight)",
              color: "var(--text-primary)",
            }}
          >
            Yang kami&nbsp;
            <span style={{ fontFamily: "var(--font-serif-display)", fontStyle: "italic", fontWeight: 400 }}>kerjakan</span>
          </h2>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: "var(--space-6)" }}>
          <Reveal index={1} style={cardStyle}>
            <i className="ph-thin ph-browser" style={{ fontSize: 32, color: "var(--accent-glow)", display: "block", marginBottom: "var(--space-5)" }} />
            <h3 style={{ margin: "0 0 var(--space-3)", fontSize: "var(--text-xl)", fontWeight: "var(--weight-semibold)" as unknown as number, color: "var(--text-primary)" }}>
              Landing Page
            </h3>
            <p style={{ margin: 0, fontSize: "var(--text-sm)", lineHeight: "var(--leading-relaxed)", color: "var(--text-secondary)", textWrap: "pretty" }}>
              Halaman profil bisnis yang ringan dan cepat dibuka dari HP — siap dipakai jualan hari itu juga.
            </p>
          </Reveal>
          <Reveal index={2} style={cardStyle}>
            <i className="ph-thin ph-gauge" style={{ fontSize: 32, color: "var(--accent-glow)", display: "block", marginBottom: "var(--space-5)" }} />
            <h3 style={{ margin: "0 0 var(--space-3)", fontSize: "var(--text-xl)", fontWeight: "var(--weight-semibold)" as unknown as number, color: "var(--text-primary)" }}>
              ERP / Dashboard Admin
            </h3>
            <p style={{ margin: 0, fontSize: "var(--text-sm)", lineHeight: "var(--leading-relaxed)", color: "var(--text-secondary)", textWrap: "pretty" }}>
              Sistem stok, invoice, dan laporan penjualan yang mengikuti alur kerja tim kamu — bukan sebaliknya.
            </p>
          </Reveal>
          <Reveal index={3} style={cardStyle}>
            <i className="ph-thin ph-heart" style={{ fontSize: 32, color: "var(--accent-glow)", display: "block", marginBottom: "var(--space-5)" }} />
            <h3 style={{ margin: "0 0 var(--space-3)", fontSize: "var(--text-xl)", fontWeight: "var(--weight-semibold)" as unknown as number, color: "var(--text-primary)" }}>
              Website Custom
            </h3>
            <p style={{ margin: 0, fontSize: "var(--text-sm)", lineHeight: "var(--leading-relaxed)", color: "var(--text-secondary)", textWrap: "pretty" }}>
              Dari Website undangan pernikahan custom, booking queue, dll.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Portofolio */}
      <section id="portofolio" style={{ position: "relative", maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-24) var(--gutter)", zIndex: 1 }}>
        <Parallax
          factor={0.06}
          style={{
            position: "absolute",
            top: "10%",
            right: "-6%",
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "radial-gradient(circle,var(--blue-600),transparent 70%)",
            filter: "blur(90px)",
            opacity: 0.3,
            pointerEvents: "none",
            zIndex: -1,
          }}
        />

        <Reveal index={0} style={{ marginBottom: "var(--space-16)" }}>
          <Badge>Portofolio</Badge>
          <h2
            style={{
              margin: "var(--space-4) 0 0",
              fontFamily: "var(--font-sans)",
              fontWeight: "var(--weight-extrabold)" as unknown as number,
              fontSize: "clamp(28px,4.4vw,var(--text-3xl))",
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-tight)",
              color: "var(--text-primary)",
            }}
          >
            Progres Studio Harel{" "}
            <span style={{ fontFamily: "var(--font-serif-display)", fontStyle: "italic", fontWeight: 400 }}>sejauh ini</span>
          </h2>
        </Reveal>

        <Reveal index={1} style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-16)", marginBottom: "var(--space-20)" }}>
          <StatBlock value="6" label="Project live" caption="Dari landing page sampai dashboard custom." />
          <StatBlock value="100" unit="%" label="Custom, Bukan Template" caption="Sesuai kebutuhanmu, bukan template siap pakai." />
          <StatBlock value="<7" label="Waktu revisi" caption="Perubahan kecil, respons cepat" />
        </Reveal>

        <Reveal index={2} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "var(--space-6)" }}>
          <div
            style={{
              gridColumn: "1/-1",
              padding: "var(--space-8)",
              borderRadius: "var(--radius-lg)",
              background: "var(--surface-glass)",
              border: "1px solid var(--surface-glass-border)",
              boxShadow: "var(--shadow-card)",
              display: "grid",
              gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1fr)",
              gap: "var(--space-8)",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                <h3 style={{ margin: 0, fontSize: "var(--text-xl)", fontWeight: "var(--weight-semibold)" as unknown as number, color: "var(--text-primary)" }}>
                  Breva Cafe
                </h3>
                <Tag tone="accent">LIVE</Tag>
              </div>
              <p style={{ margin: 0, fontSize: "var(--text-sm)", lineHeight: "var(--leading-relaxed)", color: "var(--text-secondary)", textWrap: "pretty" }}>
                Pemesanan online direct ke WhatsApp — pickup atau delivery, pilih menu, checkout, sampai notifikasi pesanan. Cocok untuk FnB lokal yang baru mulai usaha.
              </p>
              <a
                href="https://brevacafe.vercel.app"
                target="_blank"
                rel="noopener"
                style={{ fontSize: "var(--text-sm)", fontWeight: "var(--weight-semibold)" as unknown as number, display: "inline-flex", alignItems: "center", gap: 6 }}
              >
                Lihat live demo <i className="ph-thin ph-arrow-up-right" />
              </a>
            </div>
            <Image
              src={brevaCafeFlow}
              alt="Alur pemesanan online Breva Cafe: pilih pickup/delivery, menu, keranjang, dan detail pesanan"
              width={1200}
              height={628}
              style={{ width: "100%", height: "auto", borderRadius: "var(--radius-md, 10px)", display: "block" }}
              sizes="(max-width: 900px) 100vw, 550px"
            />
          </div>
          <div style={{ ...cardStyle, padding: "var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <Image
              src={stockManagementDashboard}
              alt="Dashboard manajemen stok custom dengan laporan laba rugi dan penjualan"
              width={1200}
              height={628}
              style={{ width: "100%", height: "auto", borderRadius: "var(--radius-md, 10px)", display: "block" }}
              sizes="(max-width: 700px) 100vw, 400px"
            />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-3)" }}>
              <h3 style={{ margin: 0, fontSize: "var(--text-lg)", fontWeight: "var(--weight-semibold)" as unknown as number, color: "var(--text-primary)" }}>
                Stock Management — Custom Dashboard
              </h3>
              <Tag tone="accent">LIVE</Tag>
            </div>
            <p style={{ margin: 0, fontSize: "var(--text-sm)", lineHeight: "var(--leading-relaxed)", color: "var(--text-secondary)", textWrap: "pretty" }}>
              Cocok untuk yang punya gudang/distributor yang belum ada dashboard management stock.
            </p>
            <a
              href="https://erp-distributor.vercel.app/"
              style={{ fontSize: "var(--text-sm)", fontWeight: "var(--weight-semibold)" as unknown as number, display: "inline-flex", alignItems: "center", gap: 6 }}
            >
              Lihat demo Distribusi <i className="ph-thin ph-arrow-up-right" />
            </a>
            <a
              href="https://erp-demo-lovat.vercel.app/"
              style={{ fontSize: "var(--text-sm)", fontWeight: "var(--weight-semibold)" as unknown as number, display: "inline-flex", alignItems: "center", gap: 6 }}
            >
              Lihat demo Kedai Kopi<i className="ph-thin ph-arrow-up-right" />
            </a>
          </div>
          <div style={{ ...cardStyle, padding: "var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <Image
              src={landingDigitalProduct}
              alt="Landing page penjualan produk digital dengan pricing dan CTA order via WhatsApp"
              width={1200}
              height={628}
              style={{ width: "100%", height: "auto", borderRadius: "var(--radius-md, 10px)", display: "block" }}
              sizes="(max-width: 700px) 100vw, 400px"
            />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-3)" }}>
              <h3 style={{ margin: 0, fontSize: "var(--text-lg)", fontWeight: "var(--weight-semibold)" as unknown as number, color: "var(--text-primary)" }}>
                Landing Page — Digital Product
              </h3>
              <Tag tone="accent">LIVE</Tag>
            </div>
            <p style={{ margin: 0, fontSize: "var(--text-sm)", lineHeight: "var(--leading-relaxed)", color: "var(--text-secondary)", textWrap: "pretty" }}>
              Cocok untuk penjualan digital product atau penjualan barang tertentu — order langsung via WhatsApp.
            </p>
            <a
              href="https://porto-studio-harel.vercel.app/"
              style={{ fontSize: "var(--text-sm)", fontWeight: "var(--weight-semibold)" as unknown as number, display: "inline-flex", alignItems: "center", gap: 6 }}
            >
              Lihat demo Digital Product <i className="ph-thin ph-arrow-up-right" />
            </a>
            <a
              href="https://landing-page-skincare.netlify.app/"
              style={{ fontSize: "var(--text-sm)", fontWeight: "var(--weight-semibold)" as unknown as number, display: "inline-flex", alignItems: "center", gap: 6 }}
            >
              Lihat demo Skincare<i className="ph-thin ph-arrow-up-right" />
            </a>
          </div>
          <div style={{ ...cardStyle, padding: "var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <Image
              src={weddingInvitation}
              alt="Website undangan pernikahan Jim & Pam dengan galeri foto dan detail acara"
              width={1200}
              height={628}
              style={{ width: "100%", height: "auto", borderRadius: "var(--radius-md, 10px)", display: "block" }}
              sizes="(max-width: 700px) 100vw, 400px"
            />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-3)" }}>
              <h3 style={{ margin: 0, fontSize: "var(--text-lg)", fontWeight: "var(--weight-semibold)" as unknown as number, color: "var(--text-primary)" }}>
                Wedding Invitation
              </h3>
              <Tag tone="accent">LIVE</Tag>
            </div>
            <p style={{ margin: 0, fontSize: "var(--text-sm)", lineHeight: "var(--leading-relaxed)", color: "var(--text-secondary)", textWrap: "pretty" }}>
              Undangan pernikahan berbasis website, lengkap dengan galeri foto dan detail acara.
            </p>
            <a
              href="https://wedding-invitation.studioharel.id/"
              style={{ fontSize: "var(--text-sm)", fontWeight: "var(--weight-semibold)" as unknown as number, display: "inline-flex", alignItems: "center", gap: 6 }}
            >
              Lihat demo <i className="ph-thin ph-arrow-up-right" />
            </a>
          </div>
        </Reveal>
      </section>

      {/* Kenapa */}
      <section id="kenapa" style={{ position: "relative", maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-24) var(--gutter)", zIndex: 1 }}>
        <Reveal index={0} style={{ marginBottom: "var(--space-16)" }}>
          <Badge>Kenapa Studio Harel</Badge>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "var(--space-10)" }}>
          <Reveal index={1}>
            <div style={{ height: 1, background: "var(--divider-accent)", marginBottom: "var(--space-5)" }} />
            <h3 style={{ margin: "0 0 var(--space-3)", fontSize: "var(--text-lg)", fontWeight: "var(--weight-semibold)" as unknown as number, color: "var(--text-primary)" }}>
              Developer Berpengalaman
            </h3>
            <p style={{ margin: 0, fontSize: "var(--text-sm)", lineHeight: "var(--leading-relaxed)", color: "var(--text-secondary)", textWrap: "pretty" }}>
              6 tahun mengerjakan React di Tiket.com, sekarang fokus membangun produk untuk UMKM.
            </p>
          </Reveal>
          <Reveal index={2}>
            <div style={{ height: 1, background: "var(--divider-accent)", marginBottom: "var(--space-5)" }} />
            <h3 style={{ margin: "0 0 var(--space-3)", fontSize: "var(--text-lg)", fontWeight: "var(--weight-semibold)" as unknown as number, color: "var(--text-primary)" }}>
              Custom Code
            </h3>
            <p style={{ margin: 0, fontSize: "var(--text-sm)", lineHeight: "var(--leading-relaxed)", color: "var(--text-secondary)", textWrap: "pretty" }}>
              Dibangun dari custom code, bukan template generik yang dipakai berulang-ulang.
            </p>
          </Reveal>
          <Reveal index={3}>
            <div style={{ height: 1, background: "var(--divider-accent)", marginBottom: "var(--space-5)" }} />
            <h3 style={{ margin: "0 0 var(--space-3)", fontSize: "var(--text-lg)", fontWeight: "var(--weight-semibold)" as unknown as number, color: "var(--text-primary)" }}>
              Harga yang fair
            </h3>
            <p style={{ margin: 0, fontSize: "var(--text-sm)", lineHeight: "var(--leading-relaxed)", color: "var(--text-secondary)", textWrap: "pretty" }}>
              Kualitas developer berpengalaman, harga tetap masuk akal untuk UMKM.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Kontak */}
      <section
        id="kontak"
        style={{
          position: "relative",
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "var(--space-24) var(--gutter) var(--space-32)",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        <Parallax
          factor={0.1}
          style={{
            position: "absolute",
            top: "-10%",
            left: "50%",
            width: 760,
            height: 760,
            borderRadius: "50%",
            background: "radial-gradient(circle,var(--blue-600),transparent 70%)",
            filter: "blur(100px)",
            opacity: 0.35,
            pointerEvents: "none",
            zIndex: -1,
            transform: "translateX(-50%)",
          }}
        />

        <Reveal index={0} style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-8)" }}>
          <h2
            style={{
              margin: 0,
              maxWidth: "16ch",
              fontFamily: "var(--font-sans)",
              fontWeight: "var(--weight-extrabold)" as unknown as number,
              fontSize: "clamp(32px,6vw,var(--text-4xl))",
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-tight)",
              color: "var(--text-primary)",
              textWrap: "balance",
            }}
          >
            Ceritakan idemu, kami yang{" "}
            <span
              style={{
                fontFamily: "var(--font-serif-display)",
                fontStyle: "italic",
                fontWeight: 400,
                color: "var(--white)",
                textShadow: "0 0 40px rgba(33,197,212,.45)",
              }}
            >
              urus sisanya
            </span>
          </h2>
          <p style={{ margin: 0, maxWidth: "44ch", fontSize: "var(--text-base)", lineHeight: "var(--leading-relaxed)", color: "var(--text-secondary)", textWrap: "pretty" }}>
            Kirim pesan singkat soal bisnis dan kebutuhanmu. Kami balas dengan estimasi waktu dan biaya, tanpa basa-basi.
          </p>
          <Button variant="primary" size="lg" onClick={openWA}>
            Chat Sekarang
          </Button>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)", alignItems: "center", marginTop: "var(--space-2)" }}>
            <a href="mailto:contact@studioharel.id" style={{ fontSize: "var(--text-sm)" }}>
              contact@studioharel.id
            </a>
            <span style={{ fontSize: "var(--text-2xs)", color: "var(--text-tertiary)" }}>
              +62 812-9256-7788 (WhatsApp)
            </span>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid var(--border-subtle)" }}>
        <div
          style={{
            maxWidth: "var(--container-max)",
            margin: "0 auto",
            padding: "var(--space-6) var(--gutter)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--space-4)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
            <Image src={logoMark} alt="Studio Harel" width={1085} height={492} style={{ height: 20, width: "auto", display: "block" }} />
            <span style={{ fontWeight: 700, fontSize: 15, color: "var(--text-primary)" }}></span>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent-primary)" }} />
            <span style={{ fontSize: "var(--text-2xs)", color: "var(--text-tertiary)" }}>© 2026</span>
          </div>
          <a href="https://instagram.com/studioharel.id" target="_blank" rel="noopener" style={{ fontSize: "var(--text-sm)" }}>
            @studioharel.id
          </a>
        </div>
      </footer>
    </div>
  );
}
