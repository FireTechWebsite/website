import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BackgroundImage from 'gatsby-background-image';
import styles from '../ProjectCard/projectCard.module.css';
import { CgArrowLongRight } from 'react-icons/cg';

const ProjectCard = ({ src, content }) => {
	return (
		<BackgroundImage fluid={src} style={{ width: '100%', margin: '1rem 1rem', margin: '1rem' }}>
			<article className={styles.card}>
				<Col xs={12} className={styles.cardContent}>
					<Row>
						<Col xs={12}>
							<p className={styles.p}>{content}</p>
						</Col>
						<Col xs={12} className={styles.arrowHolder}>
							<CgArrowLongRight className={styles.arrow} />
						</Col>
					</Row>
				</Col>
			</article>
		</BackgroundImage>
	);
};

export default ProjectCard;
