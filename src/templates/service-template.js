import React from 'react';
import { Row, Col, Accordion, Card } from 'react-bootstrap';
import Layout from '../Components/Global/Layout/Layout';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Slider from 'react-slick';
import styles from '../Components/Global/Page-CSS/serviceTemplate.module.css';
import { BsArrowRight } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';

const ServicePage = ({ data }) => {
	const {
		descriptionOfService: { descriptionOfService },
		images,
		nameOfService,
		servieFeatures: { Features },
		brochure: { file: { url } },
		partnerLogos
	} = data.contentfulServicePage;

	const settings = {
		dots: true,
		arrows: false,
		onEdge: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};

	console.log(data);
	return (
		<Layout>
			<Row className={styles.service}>
				<Col xs={12} md={5} className={styles.textBox}>
					<Row>
						<Col xs={11} md={8}>
							<h1 className={styles.heading}>{nameOfService}</h1>
						</Col>
						<Col xs={12} md={8}>
							{Features.map((feature) => (
								<Accordion>
									<Card>
										<Accordion.Toggle as={Card.Header} eventKey="0">
											<MdKeyboardArrowDown /> {feature.feature}
										</Accordion.Toggle>
										<Accordion.Collapse eventKey="0">
											<Card.Body>{feature.content}</Card.Body>
										</Accordion.Collapse>
									</Card>
								</Accordion>
							))}
						</Col>
						<Col xs={12} md={8} className={styles.brochure}>
							<Accordion>
								<Card>
									<a
										href={url}
										target="_blank"
										rel=" noopener noreferrer"
										download
										className={styles.brochureText}
									>
										<Accordion.Toggle as={Card.Header} eventKey="0">
											Download complete range of products <BsArrowRight />
										</Accordion.Toggle>
									</a>
								</Card>
							</Accordion>
						</Col>
						<Col xs={11} md={8}>
							<h2 className={styles.heading3}>Our Partners</h2>
							<Row className={styles.partnerLogos}>
								{partnerLogos.map((logo) => (
									<Col xs={4}>
										<Img fluid={logo.fluid} alt={logo.title} />
									</Col>
								))}
							</Row>
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
			partnerLogos {
				fluid(maxWidth: 2000, quality: 100) {
					...GatsbyContentfulFluid
				}
			}
			brochure {
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
