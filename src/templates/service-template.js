import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Layout from '../Components/Global/Layout/Layout';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

const ServicePage = ({ data }) => {
	console.log(data);
	return (
		<Layout>
			<Row>
				<Col xs={12}>hello</Col>
			</Row>
		</Layout>
	);
};

export const query = graphql`
	query($slug: String) {
		contentfulServicePage(slug: { eq: $slug }) {
			linkToPdf
			nameOfService
			descriptionOfService {
				descriptionOfService
			}
			images {
				fluid {
					src
				}
				title
			}
			servieFeatures {
				Features {
					content
					feature
				}
			}
		}
	}
`;

export default ServicePage;
