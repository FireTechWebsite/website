import React from 'react';
import { Col } from 'react-bootstrap';
import styles from '../ServicesCard/servicesCard.module.css';
import { Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { AiOutlinePlus } from 'react-icons/ai';

const ServicesCard = ({ fileName, subtitle, title, src, xs, sm, md }) => {
	const handleTitle = (x) => {
		if (x) {
			let item = x.replace('.jpg', '');
			return item;
		}
	};
	return (
		<Col xs={xs} sm={sm} md={md} style={{ margin: '1rem 0rem' }}>
			<BackgroundImage fluid={src} style={{ width: '100%' }}>
				<Link to={title} className={styles.link}>
					<article className={styles.card}>
						<Col xs={12}>
							<h3>{fileName ? handleTitle(fileName) : title}</h3>
							<p className={styles.subtitle}>{subtitle}</p>
							READ MORE <AiOutlinePlus />
						</Col>
					</article>
				</Link>
			</BackgroundImage>
		</Col>
	);
};

export default ServicesCard;
