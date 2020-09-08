import React from 'react';
import Layout from '../Components/Global/Layout/Layout';
import HeroSection from '../Components/HomePage/HeroSection/HeroSection';
import { graphql } from 'gatsby';
import AboutUs from '../Components/HomePage/AboutUs/AboutUs';

const Home = ({ data }) => {
	console.log(data);

	const {
		heroImage: { fluid, title },
		aboutUsPhoto: { aboutUsPic, aboutUsPhotoTitle },
		aboutUsService1,
		aboutUsService2,
		aboutUsService3,
		aboutUsTitle,
		aboutUsText: { aboutUsText }
	} = data.allContentfulHomepage.nodes[0];
	return (
		<Layout>
			<HeroSection src={fluid} alt={title} />
			<AboutUs
				aboutUsService1={aboutUsService1}
				aboutUsService2={aboutUsService2}
				aboutUsService3={aboutUsService3}
				aboutUsTitle={aboutUsTitle}
				aboutUsText={aboutUsText}
				src={aboutUsPic}
				alt={aboutUsPhotoTitle}
			/>
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
				aboutUsPhoto {
					aboutUsPic: fluid {
						...GatsbyContentfulFluid
					}
					aboutUsPhotoTitle: title
				}
				aboutUsTitle
				aboutUsText {
					aboutUsText
				}
				aboutUsService1
				aboutUsService2
				aboutUsService3
			}
		}
	}
`;

export default Home;
