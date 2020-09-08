import React from 'react';
import styles from '../Footer/footer.module.css';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'gatsby';

export default function Footer() {
	return (
		<Row className={styles.footer}>
			I am footer
			{/* <Col xs={12} md={8} className={styles.section1}>
				<Row>
					<Col xs={12}>
						<p>ALCATRAS</p>
					</Col>
					<Col xs={12} md={3}>
						<p className={styles.sectionTitle}>SITE MAP</p>
						<ul>
							<li>
								<Link to="/" className={styles.link}>
									Home
								</Link>
							</li>
							<li>
								<Link to="menu" className={styles.link}>
									Menu
								</Link>
							</li>
							<li>
								<Link to="blog" className={styles.link}>
									Blog
								</Link>
							</li>
							<li>
								<Link
									to="privacypolicy"
									className={styles.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									Privacy Policy
								</Link>
							</li>
						</ul>
					</Col>
					<Col xs={12} md={5}>
						<p className={styles.sectionTitle}>LOCATION</p>
						<p>160 B Attidiya Main Road, Dehiwala-Mount Lavinia, Sri Lanka</p>
						<p className={styles.sectionTitle}>OPENING HOURS</p>
						<p>Weekdays and Weekends</p>
						<ul>
							<li>11AM-3PM</li>
							<li>6AM-10PM</li>
						</ul>
					</Col>
					<Col xs={12} md={4}>
						<p className={styles.sectionTitle}>CONNECT WITH US</p>
						<ul>
							<li>
								<a
									href="https://www.facebook.com/alcatraslk"
									target="_blank"
									rel="noopener noreferrer"
									className={styles.link}
								>
									Facebook
								</a>
							</li>
							<li>
								<a
									href="https://www.instagram.com/alcatraslk/"
									target="_blank"
									rel="noopener noreferrer"
									className={styles.link}
								>
									Instagram
								</a>
							</li>

							<li>0112 739 844</li>
						</ul>
					</Col>
				</Row>
			</Col>
			<Col xs={12} md={4} className={styles.section2}>
				<Row>
					<Col xs={11} md={9}>
						<p className={styles.sectionTitle}>Looking for a catering partner for a special event?</p>
						<p className={styles.catering}>
							We undertake catering orders for celebrating special events such as weddings, birthday or
							any party where you need food of the highest quality to match your celebration. All you have
							to do is reach out to us on 0112 739 844 and we will handle the rest.
						</p>
					</Col>
				</Row>
			</Col>
			<Col xs={12} className={styles.credits}>
				Developed by Kishokanth
			</Col> */}
		</Row>
	);
}
