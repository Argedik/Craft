import Link from 'next/link';
import Arrow from '../components/DirectionKeys';
import styles from './styles.module.scss';
import React from 'react';
import NavBar from '../components/navBar';
import Button from '../components/buttons';

const Services = () => {
	return (
		<div className={styles.container}>
			<NavBar />
			<main className={styles.main}>
				<div className={styles.overlay}>
					<h1 className={styles.title}>Service</h1>
					<div className={styles.subtitle}>
						<h3>Customer service</h3>
						<p>
							Craft Industrial takes great pride in the built-in features that
							contribute to our overall accuracy and reliability. Periodic
							inspection and maintenance is required to ensure that the
							specifications and performance of your Craft Industrial equipment
							are within recommended tolerances.
						</p>
						<h3>Spare parts</h3>
						<p>
							Many of our products utilize easily replaceable components that
							can be ordered and replaced directly. For parts lists and
							technical assistance, you can contact +90 534 787 53 34. For your
							spare parts questions, you can also send us an e-mail at
							info@crafttasarim.com.
						</p>
						<h3>Returned Products</h3>
						<p>
							Please assist us by requesting a return authorization stating the
							reason for your return or exchange, along with a copy of your
							packing slip. Returned items will not be accepted or credited
							without the prior consent of Craft Industrial. Materials produced
							to order cannot be returned. All returned items are subject to a
							restocking fee and a refurbishment or repackaging fee if
							necessary. All returned items must be in our possession within 20
							days of our authorization and must be shipped prepaid.
						</p>
					</div>
				</div>
				<div className={styles.overlay}>
					<h1 className={styles.title}>Transfer</h1>
					<div className={styles.subtitle}>
						<h3>Delivery Information</h3>
						<div>
							<p>
								For most small items under 75 kilos, we ship by UPS Standard
								Ground service or air cargo according to the product delivery
								time. Delivery charges are determined by the total weight and
								destination of your order.
							</p>
							<p>
								In-stock orders usually ship within 72 hours. For many in-stock
								orders, you can also choose to upgrade to Express Delivery or
								Next Day Air service to ship the next business day.
							</p>
							<p>
								Basic Motor Cargo delivery is used for large and heavy items.
								Delivery times, shipping costs and delivery schedules may vary.
								Items ordered together may not necessarily be shipped together.
							</p>
							<p>
								All Sea/Air shipping, packaging, handling, customs and shipping
								fees will be paid by the buyer. All (estimated) freight charges
								stated in our proforma invoices or quotes are based on tariff
								rates at the time and are subject to change without notice. Any
								increase in Sea/Air tariffs between our proforma date (quote
								date) and the actual shipment date will be paid by the buyer.
								All products are F.O.B. is sent as.
							</p>
						</div>
						<h3>
							Please do not hesitate to contact us for any questions you may
							have regarding the shipping of your order
						</h3>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Services;
