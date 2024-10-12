import Link from "next/link";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faLinkedin,
    faSquareInstagram,
    faSquareWhatsapp,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <h3 className={styles.title}>Craft Industrial Design</h3>
                    <div>
                        <p className={styles.known}>2024 All rights Reserved</p>
                        <p>
                            Craft Industrial, headquartered in Istanbul, Turkey,
                            is a new and....
                        </p>
                        <p className={`${styles.known} ${styles.info}`}>
                            <Link
                                href="https://artmob.com.tr/en/kvkk"
                                className={styles.infoLink}
                            >
                                KVKK
                            </Link>
                            <span className={styles.bracket}>|</span>
                            <Link
                                href="https://artmob.com.tr/en/kullanim-sartlari"
                                className={styles.infoLink}
                            >
                                Terms of use
                            </Link>
                            <span className={styles.bracket}>|</span>
                            <Link
                                href="https://artmob.com.tr/en/gizlilik"
                                className={styles.infoLink}
                            >
                                Privacy Policy
                            </Link>
                            <span className={styles.bracket}>|</span>
                            <Link
                                href="https://artmob.com.tr/en/cerezler"
                                className={styles.infoLink}
                            >
                                Cookies
                            </Link>
                            <span className={styles.bracket}>|</span>
                        </p>
                        <div className={styles.social}>
                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/linkedin.svg"
                                    alt="WhatsApp"
                                    className={styles.icon}
                                />
                            </a>

                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/instagram.svg"
                                    alt="WhatsApp"
                                    className={styles.icon}
                                />
                            </a>
                            <a
                                href="https://web.whatsapp.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/whatsapp.svg"
                                    alt="WhatsApp"
                                    className={styles.icon}
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={`${styles.column} ${styles.web}`}>
                    <Link href="/about" className={styles.link}>
                        About Us
                    </Link>
                    <Link href="/product" className={styles.link}>
                        Product
                    </Link>
                    <Link href="/services" className={styles.link}>
                        Services
                    </Link>
                    <Link href="/contact" className={styles.link}>
                        Contact
                    </Link>
                </div>
                <div className={`${styles.column} ${styles.hidden}`}>
                    <h3 className={styles.title}>Address</h3>
                    <div className={styles.address}>Main Office & Factory</div>
                    <div className={styles.important}>Istanbul Türkiye</div>
                    <div className={styles.address}>
                        Craft Industrial Design
                    </div>
                    <div className={styles.address}>Başakşehir Mah</div>
                </div>

                <div className={`${styles.column} ${styles.hidden}`}>
                    <h3 className={styles.title}>Contact</h3>
                    <div>P: +90 534 787 5334</div>
                    <div>M: info@crafttasarim.com</div>
                    <div className={styles.important}>for Export</div>
                    <div>help@crafttasarim.com</div>
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.column}>
                        <h3 className={styles.title}>Address</h3>
                        <div className={styles.address}>
                            Main Office & Factory
                        </div>
                        <div className={styles.important}>Istanbul Türkiye</div>
                        <div className={styles.address}>
                            Craft Industrial Design
                        </div>
                        <div className={styles.address}>Başakşehir Mah</div>
                    </div>

                    <div className={styles.column}>
                        <h3 className={styles.title}>Contact</h3>
                        <div>P: +90 534 787 5334</div>
                        <div>M: info@crafttasarim.com</div>
                        <div className={styles.important}>for Export</div>
                        <div>help@crafttasarim.com</div>
                    </div>
                </div>
                <div className={`${styles.column} ${styles.mobile}`}>
                    <Link href="/about" className={styles.link}>
                        About Us
                    </Link>
                    <Link href="/product" className={styles.link}>
                        Product
                    </Link>
                    <Link href="/services" className={styles.link}>
                        Services
                    </Link>
                    <Link href="/contact" className={styles.link}>
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
