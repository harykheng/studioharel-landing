import Image from "next/image";
import { work } from "@/lib/content";
import { TrackedLink } from "@/components/TrackedLink";
import { LogoMark } from "./Logo";
import styles from "./About.module.css";

const dashboard = work.dashboard[0];
const phone = work.ordi[2];

export function About() {
  return (
    <section id="kenapa" className={styles.about} aria-labelledby="tentang-title">
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.collage}>
          <figure className={`${styles.shot} ${styles.shotA}`}>
            <Image
              src={dashboard.src}
              alt={dashboard.alt}
              width={dashboard.width}
              height={dashboard.height}
              sizes="(max-width: 760px) 78vw, 480px"
              quality={90}
            />
          </figure>
          <figure className={`${styles.shot} ${styles.shotB}`}>
            <Image
              src={phone.src}
              alt={phone.alt}
              width={phone.width}
              height={phone.height}
              sizes="(max-width: 760px) 32vw, 200px"
              quality={90}
            />
          </figure>
          <LogoMark className={styles.mark} />
        </div>

        <div className={styles.notes}>
          <h2 id="tentang-title" className="eyebrow">
            <span className="n">(02)</span>Tentang Studio Harel
          </h2>
          <div className={styles.cols}>
            <div>
              <p>
                Studio Harel membangun website dan sistem untuk UMKM: landing page, pemesanan online, dashboard stok dan
                invoice, sampai undangan pernikahan.
              </p>
              <p>Semua dibangun dari custom code, bukan template generik yang dipakai berulang-ulang.</p>
            </div>
            <div>
              <p>Proyeknya dikerjakan langsung oleh developer yang 6 tahun mengerjakan React di Tiket.com.</p>
              <p>Harga tetap masuk akal untuk UMKM. Estimasi waktu dan biaya dikirim sebelum pengerjaan dimulai.</p>
            </div>
          </div>
          <p className={styles.more}>
            <span className="n">(02a)</span>Enam proyek sudah live dan bisa dicoba.{" "}
            <TrackedLink
              href="#portofolio"
              event="view_portfolio_click"
              params={{ click_location: "tentang" }}
              className="link"
            >
              Lihat karya
            </TrackedLink>
          </p>
        </div>

        <p className={styles.statement}>Setiap website kami bangun dari nol, mengikuti cara kerja usahamu.</p>
      </div>
    </section>
  );
}
