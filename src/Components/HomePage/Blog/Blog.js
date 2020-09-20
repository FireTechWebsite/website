import React from 'react';
import { Row, Col } from 'react-bootstrap';
import TitleText from '../../Global/TitleText/TitleText';
import ServicesCard from '../ServicesCard/ServicesCard';

const Blog = ({ data }) => {
	return (
		<section style={{ margin: '1rem 0rem' }}>
			<Row>
				<TitleText
					xs="12"
					md="8"
					title="OUR BLOG"
					subtitle="OUR THOUGHTS ON FIRE SAFETY AND WHAT WE DO"
					content="We believe in educating our clients on fire hazards and safety in order to prepare them for when the worst strikes"
				/>
				{data.nodes.map((post) => (
					<ServicesCard
						title={`blog/${post.slug}`}
						subtitle={post.description.description}
						fileName={post.title}
						src={post.image.fluid}
						xs="12"
						sm="6"
						md="4"
					/>
				))}
			</Row>
		</section>
	);
};

export default Blog;
