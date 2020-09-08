import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from '../../Global/TitleText/titleText.module.css';
import globalstyles from '../../Global/global.module.css';

const TitleText = () => {
	return (
		<Col xs={12} className={styles.titleText}>
			<p className={styles.title}>WHAT WE HAVE</p>
			<h2 className={styles.subtitle}>FIRE FIGHTER SECURITY SERVICE</h2>
			<p className={`${globalstyles.p} ${styles.content}`}>
				Get help from a caring and professional fire fighters. We provide a practical action, advice and
				resources to make your life easier and safe.
			</p>
		</Col>
	);
};

export default TitleText;
