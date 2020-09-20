import { graphql } from 'gatsby';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Layout from '../Components/Global/Layout/Layout';
import ServicesCard from '../Components/HomePage/ServicesCard/ServicesCard';

const services = ({ data }) => {
	return (
		<Layout>
			<Row style={{ margin: '2rem 0rem' }}>
				{data.allContentfulHomepage.nodes[0].servicesTypes.map((service) => (
					<ServicesCard
						fileName={service.file.fileName}
						subtitle={service.description}
						title={service.title}
						src={service.fluid}
						xs={12}
						sm={6}
						md={3}
					/>
				))}
			</Row>
		</Layout>
	);
};

export const query = graphql`
	query {
		allContentfulHomepage {
			nodes {
				servicesTypes {
					fluid(maxWidth: 2000, quality: 100) {
						...GatsbyContentfulFluid
					}
					title
					description
					file {
						fileName
					}
				}
			}
		}
	}
`;
export default services;
