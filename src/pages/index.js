import React from 'react';
import Layout from '../Components/Global/Layout/Layout';
import HeroSection from '../Components/HomePage/HeroSection/HeroSection';
import { graphql } from 'gatsby';
import AboutUs from '../Components/HomePage/AboutUs/AboutUs';
import Services from '../Components/HomePage/Services/Services';

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
			<Services data={data} />
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
				service1Image {
					service1Image: fluid(maxWidth: 2000, quality: 100) {
						...GatsbyContentfulFluid
					}
				}
				service1Slug
				service1Subtitle
				service1Title
				service2Image {
					service2Image: fluid(maxWidth: 2000, quality: 100) {
						...GatsbyContentfulFluid
					}
				}
				service2Slug
				service2Subtitle
				service2Title
				service3Image {
					service3Image: fluid(maxWidth: 2000, quality: 100) {
						...GatsbyContentfulFluid
					}
				}
				service3Slug
				service3Subtitle
				service3Title
				service4Image {
					service4Image: fluid(maxWidth: 2000, quality: 100) {
						...GatsbyContentfulFluid
					}
				}
				service4Slug
				service4Subtitle
				service4Title
				service5Image {
					service5Image: fluid(maxWidth: 2000, quality: 100) {
						...GatsbyContentfulFluid
					}
				}
				service5Slug
				service5Subtitle
				service5Title
				service6Image {
					service6Image: fluid(maxWidth: 2000, quality: 100) {
						...GatsbyContentfulFluid
					}
				}
				service6Slug
				service6Subtitle
				service6Title
				service7Image {
					service7Image: fluid(maxWidth: 2000, quality: 100) {
						...GatsbyContentfulFluid
					}
				}
				service7Slug
				service7Subtitle
				service7Title
				service8Image {
					service8Image: fluid(maxWidth: 2000, quality: 100) {
						...GatsbyContentfulFluid
					}
				}
				service8Slug
				service8Subtitle
				service8Title
			}
		}
	}
`;

export default Home;
