import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from '../../Global/TitleText/titleText.module.css';
import globalstyles from '../../Global/global.module.css';

const TitleText = ({ title, subtitle, content }) => {
	return (
		<Col xs={12} className={styles.titleText}>
			<p className={styles.title}>{title}</p>
			<h2 className={styles.subtitle}>{subtitle}</h2>
			<Row className={styles.contentHolder}>
				<Col md={8}>
					<p className={`${globalstyles.p} ${styles.content}`}>{content}</p>
				</Col>
			</Row>
		</Col>
	);
};

export default TitleText;
