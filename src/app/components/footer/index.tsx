import Link from "next/link";
import styles from "./styles.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.footerContainer}`}>
                <div className={`${styles.firstContainer} `}>
                    <div className={styles.footerColumn}>
                        <h3 className={styles.footerTitle}>
                            Craft Industrial Design
                        </h3>
                        <p>2024 All rights Reserved</p>
                        <p>
                            Craft Industrial, headquartered in Istanbul, Turkey,
                            is a new and....
                        </p>
                        <div className={styles.footerSocial}>
                            <Link href="https://linkedin.com">LinkedIn</Link>
                            <Link href="https://instagram.com">Instagram</Link>
                            <Link href="https://whatsapp.com">WhatsApp</Link>
                        </div>
                    </div>

                    <div
                        className={`${styles.footerContainer} ${styles.secondContainer} `}
                    >
                        <Link href="/about" className={styles.footerLink}>
                            About Us
                        </Link>
                        <Link href="/product" className={styles.footerLink}>
                            Product
                        </Link>
                        <Link href="/services" className={styles.footerLink}>
                            Services
                        </Link>
                        <Link href="/contact" className={styles.footerLink}>
                            Contact
                        </Link>
                    </div>
                </div>
                <div className={`${styles.secondContainer} `}>
                    <div className={styles.footerColumn}>
                        <h3 className={styles.footerTitle}>Address</h3>
                        <p>Main Office & Factory</p>
                        <p>Istanbul Türkiye</p>
                        <p>Craft Industrial Design</p>
                        <p>Başakşehir Mah</p>
                    </div>

                    <div className={styles.footerColumn}>
                        <h3 className={styles.footerTitle}>Contact</h3>
                        <p>P : +90 532 787 5334</p>
                        <p>M : info@crafttasarim.com</p>
                        <p>for Export</p>
                        <p>help@crafttasarim.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
