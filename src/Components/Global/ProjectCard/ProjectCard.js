import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BackgroundImage from 'gatsby-background-image';
import styles from '../ProjectCard/projectCard.module.css';
import { CgArrowLongRight } from 'react-icons/cg';
import { Link } from 'gatsby';

const ProjectCard = ({ src, content, link }) => {
	return (
		<BackgroundImage fluid={src} style={{ width: '100%', margin: '1rem 1rem' }}>
			<Link to={link} target="_blank" rel="nofollow noopener" className={styles.link}>
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
			</Link>
		</BackgroundImage>
	);
};

export default ProjectCard;
