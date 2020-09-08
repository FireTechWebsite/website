import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image';
import styles from '../AboutUs/aboutUs.module.css';
import { FaRegBuilding } from 'react-icons/fa';
import { MdBuild } from 'react-icons/md';
import { GiFireExtinguisher } from 'react-icons/gi';

const AboutUs = ({ src, alt, aboutUsService1, aboutUsService2, aboutUsService3, aboutUsTitle, aboutUsText }) => {
	return (
		<section>
			<Row className={styles.aboutUs}>
				<Col xs={6}>
					<Row className={styles.imageHolder}>
						<Col xs={9}>
							<Img fluid={src} alt={alt} />
						</Col>
					</Row>
				</Col>
				<Col xs={12} md={5} className={styles.content}>
					<p className={styles.intro}>WHO WE ARE</p>
					<h2 className={styles.title}>{aboutUsTitle}</h2>
					<p>{aboutUsText}</p>
					<Row className={styles.servicesHolder}>
						<Col xs={3}>
							<FaRegBuilding className={styles.icon} />
							{aboutUsService1}
						</Col>
						<Col xs={3}>
							<MdBuild className={styles.icon} />
							{aboutUsService2}
						</Col>
						<Col xs={3}>
							<GiFireExtinguisher className={styles.icon} />
							{aboutUsService3}
						</Col>
					</Row>
				</Col>
			</Row>
		</section>
	);
};

export default AboutUs;
