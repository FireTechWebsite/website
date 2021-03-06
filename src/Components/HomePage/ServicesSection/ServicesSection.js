import React from 'react';
import TitleText from '../../Global/TitleText/TitleText';
import { Row, Col } from 'react-bootstrap';
import ServicesCard from '../ServicesCard/ServicesCard';
import styles from './servicesSection.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { BsArrowRight } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';

const Services = ({ servicesTypes }) => {
	let settings = {
		dots: true,
		arrows: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
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
					color="white"
					title="WHAT WE DO"
					subtitle="WHAT DOES FIRETECH ASPIRE TO ACHIEVE EVERYDAY?"
					content="We are hard at work keeping up with the changing business landscape of Sri Lanka. Firetech is geared to meet the challenges of your rapidly evolving business needs by providing uncompromising fire safety."	/>
				<Col xs={12} className={styles.sliderHolder}>
					<Slider {...settings} className={styles.slider}>
						{servicesTypes.map((service) => (
							<ServicesCard
								fileName={service.file.fileName}
								subtitle={service.description}
								title={`services/${service.title}`}
								src={service.fluid}
								key={uuidv4()}
							/>
						))}
					</Slider>
				</Col>
				<Col xs={12} className={styles.swipe}>
					SWIPE FOR MORE <BsArrowRight />
				</Col>
			</Row>
		</section>
	);
};

export default Services;
