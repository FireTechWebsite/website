import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from '../../Global/TitleText/titleText.module.css';
import globalstyles from '../../Global/global.module.css';

const TitleText = ({ title, subtitle, content, xs, md, color }) => {
	return (
		<Col xs={xs} className={styles.titleText}>
			<p className={styles.title}>{title}</p>
			<h2 className={styles.subtitle} style={{ color: color }}>
				{subtitle}
			</h2>
			<Row className={styles.contentHolder}>
				<Col md={md}>
					<p className={`${globalstyles.p} ${styles.content}`} style={{ color: color }}>
						{content}
					</p>
				</Col>
			</Row>
		</Col>
	);
};

export default TitleText;
