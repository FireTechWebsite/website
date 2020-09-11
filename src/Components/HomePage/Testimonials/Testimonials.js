import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image';
import styles from '../Testimonials/testimonials.module.css';

const Testimonials = ({ testimonialHeaderImage }) => {
	console.log(testimonialHeaderImage);
	return (
		<Row className={styles.testimonials}>
			<Col xs={12} md={6} className={styles.image}>
				<Img fluid={testimonialHeaderImage.fluid} />
			</Col>
		</Row>
	);
};

export default Testimonials;
