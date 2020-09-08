import React from 'react';
import Layout from '../Components/Global/Layout/Layout';
import HeroSection from '../Components/HeroSection/HeroSection';
import { graphql } from 'gatsby';
import AboutUs from '../Components/HomePage/AboutUs/AboutUs';

const Home = ({ data }) => {
	console.log(data);

	const { heroImage: { fluid, title } } = data.allContentfulHomepage.nodes[0];
	return (
		<Layout>
			<HeroSection src={fluid} alt={title} />
			<AboutUs />
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
