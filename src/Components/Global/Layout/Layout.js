import React from 'react';
import { Container } from 'react-bootstrap';
import NavigationBar from '../navbar/Navbar';
import styles from '../Layout/layout.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';

export default function Layout({ children }) {
	return (
		<Container fluid className={styles.container}>
			<NavigationBar />
			<main>{children}</main>

			<Footer />
		</Container>
	);
}
