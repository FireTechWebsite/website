import React from 'react';
import styles from './heroSection.module.css';
import { Row, Col } from 'react-bootstrap';
import BackgroundImage from 'gatsby-background-image';
import { Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';

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
								<Link to="services" className={styles.btn1}>
									OUR SERVICES
								</Link>
								<Link className={styles.btn2}>
									<button onClick={() => scrollTo('#about')} className={styles.innerBtn}>
										ABOUT US
									</button>
								</Link>
							</Col>
						</Row>
					</Col>
				</BackgroundImage>
			</Row>
		</section>
	);
};

export default HeroSection;
