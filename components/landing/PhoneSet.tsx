import Image from "next/image";
import type { Img } from "@/lib/content";
import styles from "./PhoneSet.module.css";

/** Phone screenshots side by side in a 16:10 box, cropped at the bottom edge. */
export function PhoneSet({ phones, sizes, className }: { phones: Img[]; sizes: string; className?: string }) {
  return (
    <div className={className ? `${styles.set} ${className}` : styles.set}>
      {phones.map((p) => (
        <Image
          key={p.src}
          className={styles.phone}
          src={p.src}
          alt={p.alt}
          width={p.width}
          height={p.height}
          sizes={sizes}
          quality={90}
        />
      ))}
    </div>
  );
}
