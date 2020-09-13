import React from 'react';
import TitleText from '../../Global/TitleText/TitleText';
import { Row, Col } from 'react-bootstrap';
import ServicesCard from '../ServicesCard/ServicesCard';
import styles from '../Services/services.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Services = ({ data }) => {
	const {
		service1Image: { service1Image },
		service1Slug,
		service1Subtitle,
		service1Title,
		service2Image: { service2Image },
		service2Slug,
		service2Subtitle,
		service2Title,
		service3Image: { service3Image },
		service3Slug,
		service3Subtitle,
		service3Title,
		service4Image: { service4Image },
		service4Slug,
		service4Subtitle,
		service4Title,
		service5Image: { service5Image },
		service5Slug,
		service5Subtitle,
		service5Title,
		service6Image: { service6Image },
		service6Slug,
		service6Subtitle,
		service6Title,
		service7Image: { service7Image },
		service7Slug,
		service7Subtitle,
		service7Title,
		service8Image: { service8Image },
		service8Slug,
		service8Subtitle,
		service8Title
	} = data.allContentfulHomepage.nodes[0];

	let settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	return (
		<section>
			<Row className={styles.row}>
				<TitleText
					xs="12"
					md="8"
					title="WHAT WE DO"
					subtitle="WHAT DOES FIRETECH ASPIRE TO ACHIEVE EVERYDAY?"
					content="We are hard at work keeping up with the rapidly changing business landscape of Sri Lanka. Firetech is geared to meet the challenges of your rapidly evolving business needs by providing uncompromising fire safety."
				/>
				<Col xs={12}>
					<Slider {...settings} className={styles.slider}>
						<ServicesCard
							slug={service1Slug}
							subtitle={service1Subtitle}
							title={service1Title}
							src={service1Image}
						/>
						<ServicesCard
							slug={service2Slug}
							subtitle={service2Subtitle}
							title={service2Title}
							src={service2Image}
						/>
						<ServicesCard
							slug={service3Slug}
							subtitle={service3Subtitle}
							title={service3Title}
							src={service3Image}
						/>
						<ServicesCard
							slug={service4Slug}
							subtitle={service4Subtitle}
							title={service4Title}
							src={service4Image}
						/>

						<ServicesCard
							slug={service5Slug}
							subtitle={service5Subtitle}
							title={service5Title}
							src={service5Image}
						/>
						<ServicesCard
							slug={service6Slug}
							subtitle={service6Subtitle}
							title={service6Title}
							src={service6Image}
						/>
						<ServicesCard
							slug={service7Slug}
							subtitle={service7Subtitle}
							title={service7Title}
							src={service7Image}
						/>
						<ServicesCard
							slug={service8Slug}
							subtitle={service8Subtitle}
							title={service8Title}
							src={service8Image}
						/>
					</Slider>
				</Col>
			</Row>
		</section>
	);
};

export default Services;
