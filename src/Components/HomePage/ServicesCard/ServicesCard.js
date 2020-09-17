import React from 'react';
import { Col } from 'react-bootstrap';
import styles from '../ServicesCard/servicesCard.module.css';
import { Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { AiOutlinePlus } from 'react-icons/ai';

const ServicesCard = ({ fileName, subtitle, title, src }) => {
	const handleTitle = (x) => {
		if (x) {
			let item = x.replace('.jpg', '');
			return item;
		}
	};
	return (
		<Col>
			<Link to={title} className={styles.link}>
				<BackgroundImage fluid={src} style={{ width: '100%', margin: '1rem 1rem' }}>
					<article className={styles.card}>
						<Col xs={12}>
							<h3>{handleTitle(fileName)}</h3>
							<p>{subtitle}</p>
							READ MORE <AiOutlinePlus />
						</Col>
					</article>
				</BackgroundImage>
			</Link>
		</Col>
	);
};

export default ServicesCard;
