import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image';
import styles from '../AboutUs/aboutUs.module.css';
import { FaRegBuilding } from 'react-icons/fa';
import { MdBuild } from 'react-icons/md';
import { GiFireExtinguisher } from 'react-icons/gi';
import BackgroundImage from 'gatsby-background-image';
import globalstyles from '../../Global/global.module.css';

const AboutUs = ({ src, alt, aboutUsService1, aboutUsService2, aboutUsService3, aboutUsTitle, aboutUsText }) => {
	return (
		<section id="about">
			<Row className={styles.aboutUs}>
				<Col xs={6} md={6} className={styles.image}>
					<Img fluid={src} />
				</Col>

				<Col xs={12} md={6} lg={5} className={styles.content}>
					<p className={`${styles.intro}`}>WHO WE ARE</p>
					<h2 className={styles.title}>{aboutUsTitle}</h2>
					<p className={globalstyles.p}>{aboutUsText}</p>
					<Row className={styles.servicesHolder}>
						<Col xs={3}>
							<FaRegBuilding className={styles.icon} />
							<p className={globalstyles.p}>{aboutUsService1}</p>
						</Col>
						<Col xs={3}>
							<MdBuild className={styles.icon} />
							<p className={globalstyles.p}>{aboutUsService2}</p>
						</Col>
						<Col xs={3}>
							<GiFireExtinguisher className={styles.icon} />
							<p className={globalstyles.p}>{aboutUsService3}</p>
						</Col>
					</Row>
				</Col>
			</Row>
		</section>
	);
};

export default AboutUs;
