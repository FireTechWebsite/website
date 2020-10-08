import React from 'react';
import Layout from '../Components/Global/Layout/Layout';
import { graphql } from 'gatsby';
import { Col, Row } from 'react-bootstrap';
import ServicesCard from '../Components/HomePage/ServicesCard/ServicesCard';

const Blog = ({ data }) => {
	console.log(data);
	return (
		<Layout>
			<Row style={{ minHeight: '80vh' }}>
				{data.allContentfulBlogPosts.nodes.map((post) => (
					<Col xs={11} sm={6} lg={4}>
						<ServicesCard
							title={post.slug}
							subtitle={post.description.description}
							fileName={post.title}
							src={post.image.fluid}
						/>
					</Col>
				))}
			</Row>
		</Layout>
	);
};

export const query = graphql`
	query {
		allContentfulBlogPosts {
			nodes {
				title
				slug
				description {
					description
				}
				image {
					fluid(maxWidth: 2000, quality: 100) {
						...GatsbyContentfulFluid
					}
				}
			}
		}
	}
`;

export default Blog;
