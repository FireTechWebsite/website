import React from 'react';
import { Row, Col, Accordion, Card } from 'react-bootstrap';
import Layout from '../Components/Global/Layout/Layout';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Slider from 'react-slick';
import styles from '../Components/Global/Page-CSS/serviceTemplate.module.css';
import { BsArrowRight } from 'react-icons/bs';
import SEO from '../Components/Global/Seo';
import { v4 as uuidv4 } from 'uuid';

const ServicePage = ({ data }) => {
	const {
		descriptionOfService: { descriptionOfService },
		images,
		nameOfService,
		servieFeatures: { Features },
		partnerLogos,
		slug,
		brochures
	} = data.contentfulServicePage;

	console.log(data);

	const settings = {
		dots: true,
		arrows: false,
		onEdge: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};

	return (
		<Layout>
			<SEO
				title={nameOfService}
				image={`https:${images[0].fluid.src}`}
				description={descriptionOfService}
				pathname={`/services/${slug}`}
			/>
			<Row className={styles.service}>
				<Col xs={12} md={5} className={styles.textBox}>
					<Row>
						<Col xs={11} md={8}>
							<h1 className={styles.heading}>{nameOfService}</h1>
						</Col>
						<Col xs={12} md={8}>
							{Features.map((feature) => (
								<Accordion key={uuidv4()}>
									<Card>
										<Accordion.Toggle as={Card.Header} eventKey="0">
											{feature.feature}
										</Accordion.Toggle>
									</Card>
								</Accordion>
							))}
						</Col>
						<Col xs={11} md={8}>
							<h1 className={styles.brochureHeading}>Brochures</h1>
						</Col>
						{brochures.map((brochure) => (
							<Col xs={12} md={8} className={styles.brochure}>
								<Accordion>
									<Card>
										<a
											href={brochure.file.url}
											target="_blank"
											rel=" noopener noreferrer"
											download
											className={styles.brochureText}
										>
											<Accordion.Toggle as={Card.Header} eventKey="0">
												{brochure.title} <BsArrowRight />
											</Accordion.Toggle>
										</a>
									</Card>
								</Accordion>
							</Col>
						))}
						<Col xs={11} md={8}>
							{partnerLogos ? (
								<Row className={styles.partnerLogos}>
									<Col xs={12}>
										<h2 className={styles.heading3}>Our Partners</h2>
									</Col>
									{partnerLogos.map((logo) => (
										<Col xs={4}>
											<Img fluid={logo.fluid} alt={logo.title} />
										</Col>
									))}
								</Row>
							) : null}
						</Col>
					</Row>
				</Col>
				<Col xs={12} md={5} className={styles.imageHolder}>
					<h1 className={styles.heading2}>{nameOfService}</h1>
					<Slider {...settings}>
						{images.map((image) => (
							<Row>
								<Col xs={12} className={styles.image}>
									<Img fluid={image.fluid} alt={image.title} />
								</Col>
							</Row>
						))}
					</Slider>
					<div className={styles.description}>
						<p>{descriptionOfService}</p>
					</div>
				</Col>
			</Row>
		</Layout>
	);
};

export const query = graphql`
	query($slug: String) {
		contentfulServicePage(slug: { eq: $slug }) {
			slug
			partnerLogos {
				fluid(maxWidth: 2000, quality: 100) {
					...GatsbyContentfulFluid
				}
			}
			brochures {
				title
				file {
					url
				}
			}
			nameOfService
			descriptionOfService {
				descriptionOfService
			}
			images {
				fluid(maxWidth: 2000, quality: 100) {
					...GatsbyContentfulFluid
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
