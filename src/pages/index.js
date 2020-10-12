import React from 'react';
import Layout from '../Components/Global/Layout/Layout';
import HeroSection from '../Components/HomePage/HeroSection/HeroSection';
import { graphql } from 'gatsby';
import AboutUs from '../Components/HomePage/AboutUs/AboutUs';
import ServicesSection from '../Components/HomePage/ServicesSection/ServicesSection';
import Partners from '../Components/HomePage/Partners/Partners';
import Testimonials from '../Components/HomePage/Testimonials/Testimonials';
import Blog from '../Components/HomePage/Blog/Blog';
import SEO from '../Components/Global/Seo';

const Home = ({ data }) => {
	const {
		heroImage: { fluid, title },
		aboutUsPhoto: { aboutUsPic, aboutUsPhotoTitle },
		aboutUsService1,
		aboutUsService2,
		aboutUsService3,
		aboutUsTitle,
		aboutUsText: { aboutUsText },
		partners,
		testimonialHeaderImage,
		reviews: { Review },
		pastProjects,
		servicesTypes
	} = data.allContentfulHomepage.nodes[0];

	console.log(data);

	return (
		<Layout>
			<SEO title="Home" pathname="/" image="https://i.ibb.co/2jxv9D5/index.png" />
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
			<Partners partners={partners} />
			<ServicesSection data={data} servicesTypes={servicesTypes} />
			<Testimonials
				testimonialHeaderImage={testimonialHeaderImage}
				reviews={Review}
				pastProjects={pastProjects}
			/>

			<Blog data={data.allContentfulBlogPosts} />
		</Layout>
	);
};
export const query = graphql`
	{
		allContentfulHomepage {
			nodes {
				pastProjects {
					fluid(maxWidth: 2000, quality: 100) {
						...GatsbyContentfulFluid
					}
					title
					description
				}
				reviews {
					Review {
						name
						review
						title
					}
				}
				testimonialHeaderImage {
					fluid(maxWidth: 2000, quality: 100) {
						...GatsbyContentfulFluid
					}
					title
				}
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
				partners {
					fluid(maxWidth: 2000, quality: 100) {
						...GatsbyContentfulFluid
					}
					title
				}
			}
		}
		allContentfulBlogPosts(limit: 3, sort: { fields: publishedData, order: DESC }) {
			nodes {
				title
				slug
				image {
					fluid(maxWidth: 2000, quality: 100) {
						...GatsbyContentfulFluid
					}
				}
				description {
					description
				}
			}
		}
	}
`;

export default Home;
