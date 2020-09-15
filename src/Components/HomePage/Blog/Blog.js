import React from 'react';
import { Row, Col } from 'react-bootstrap';
import TitleText from '../../Global/TitleText/TitleText';
import ServicesCard from '../ServicesCard/ServicesCard';

const Blog = ({ data }) => {
	return (
		<section>
			<Row>
				<TitleText
					xs="12"
					md="8"
					title="OUR BLOG"
					subtitle="OUR THOUGHTS ON FIRE SAFETY AND WHAT WE DO"
					content="We believe in educating our clients on fire hazards and safety in order to prepare them for when the worst strikes"
				/>
				{data.nodes.map((post) => (
					<Col xs={11} sm={6} lg={3}>
						<ServicesCard
							slug="fff"
							subtitle={post.description.description}
							title={post.title}
							src={post.image.fluid}
						/>
					</Col>
				))}
			</Row>
		</section>
	);
};

export default Blog;
