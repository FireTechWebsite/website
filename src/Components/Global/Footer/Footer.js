import React from 'react';
import styles from '../Footer/footer.module.css';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'gatsby';

const Footer = () => {
	return <Row className={styles.footer}>I am footer</Row>;
};

export default Footer;
