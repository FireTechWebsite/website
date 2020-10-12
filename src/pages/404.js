import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Layout from '../Components/Global/Layout/Layout';
import SEO from '../Components/Global/Seo';

function Error() {
	return (
		<Layout>
			<SEO
				title="404"
				image="https://i.ibb.co/GV7LQLh/404.png"
				description="You seem to be lost or have stumbled across a broken link"
				pathname="/404"
			/>
			<Row
				style={{
					height: '80vh',
					display: 'flex',
					alignContent: 'center',
					justifyContent: 'center',
					textAlign: 'center'
				}}
			>
				<Col xs={10}>
					<h1>Uh-oh, We don't seem to have anything here. Maybe you came across broken link?</h1>
				</Col>
			</Row>
		</Layout>
	);
}

export default Error;
