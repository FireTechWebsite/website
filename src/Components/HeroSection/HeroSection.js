import React from 'react';
import styles from '../HeroSection/heroSection.module.css';
import { Row, Col } from 'react-bootstrap';
import BackgroundImage from 'gatsby-background-image';

const HeroSection = ({ src }) => {
	return (
		<section>
			<Row>
				<BackgroundImage fluid={src} style={{ width: '100%' }}>
					<Col xs={12} className={styles.backgroundHolder}>
						<Row className={styles.background}>
							<Col xs={11} md={6}>
								<h1 className={styles.text}>
									PROTECTING <span className={styles.highlight}>LIFE</span> AND{' '}
									<span className={styles.highlight}>PROPERTY</span> THROUGH QUALITY
								</h1>
							</Col>
							<Col xs={12}>
								<button className={styles.btn1}>READ MORE</button>
								<button className={styles.btn2}>CONTACT</button>
							</Col>
						</Row>
					</Col>
				</BackgroundImage>
			</Row>
		</section>
	);
};

export default HeroSection;
