import React from 'react';
import Layout from '../Components/Global/Layout/Layout';
import { graphql } from 'gatsby';
import { Col, Row } from 'react-bootstrap';
import ServicesCard from '../Components/HomePage/ServicesCard/ServicesCard';
import SEO from '../Components/Global/Seo';
import { v4 as uuidv4 } from 'uuid';

const Blog = ({ data }) => {
	return (
		<Layout>
			<SEO
				title="Our Blog"
				image="https://i.ibb.co/mcpkNBP/Our-Blog.png"
				description="Welcome to our blog where we share our expertise on fire engineering matters"
				pathname="/blog"
			/>
			<Row style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center' }}>
				{data.allContentfulBlogPosts.nodes.map((post) => (
					<Col xs={11} sm={6} lg={4}>
						<ServicesCard
							title={post.slug}
							subtitle={post.description.description}
							fileName={post.title}
							src={post.image.fluid}
							key={uuidv4()}
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
