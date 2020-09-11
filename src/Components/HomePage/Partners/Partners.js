import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image';
import TitleText from '../../Global/TitleText/TitleText';

const Partners = ({ partners }) => {
	return (
		<section>
			<Row>
				<TitleText
					title="OUR PARTNERS"
					subtitle="WE PARTNER WITH THE WORLD'S BEST TO PROTECT YOU AND YOUR ASSETS"
					content="Carefully chosen for their proven expertise in fire safety, our partnerships provide us with the ability to provide best-in-class fire safety engineering to you, your loved ones and assets"
				/>
				{partners.map((image) => (
					<Col xs={4} md={2}>
						<Img fluid={image.fluid} />
					</Col>
				))}
			</Row>
		</section>
	);
};

export default Partners;
