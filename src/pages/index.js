import React from 'react';
import Layout from '../Components/Layout/Layout';
import HeroSection from '../Components/HeroSection/HeroSection';
import { graphql } from 'gatsby';

const Home = ({ data }) => {
	console.log(data);

	const { heroImage: { fluid, title }, heroImageText } = data.allContentfulHomepage.nodes[0];
	return (
		<Layout>
			<HeroSection src={fluid} alt={title} heroImageText={heroImageText} />
		</Layout>
	);
};
export const query = graphql`
	{
		allContentfulHomepage {
			nodes {
				heroImage {
					fluid(maxWidth: 2000, quality: 100) {
						...GatsbyContentfulFluid
					}
					title
				}
				heroImageText
			}
		}
	}
`;

export default Home;
