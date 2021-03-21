import React from 'react';
import TitleText from '../../Global/TitleText/TitleText';
import { Row, Col } from 'react-bootstrap';
import ServicesCard from '../ServicesCard/ServicesCard';
import styles from '../ServicesSection/servicesSection.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Img from 'gatsby-image';

const Partners = ({ partners }) => {

	console.log(partners)
	let settings = {
		dots: true,
		arrows: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
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
					slidesToShow: 2,
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
				title="OUR PARTNERS"
				subtitle="WE PARTNER WITH THE WORLD'S BEST TO PROTECT YOU AND YOUR ASSETS"
				content="Carefully chosen for their proven expertise in fire safety, our partnerships provide us with the ability to provide best-in-class fire safety engineering to protect you, your loved ones and valued assets"/>
			
	
				<Col xs={12} className={styles.mobileSlider} >
					<Slider {...settings} className={styles.slider}>
					<Col xs={2}>
					<Img fixed={partners[0].fixed} />
					</Col>
					<Col xs={2}>
					<Img fixed={partners[1].fixed} />
					</Col>
					<Col xs={2}>
					<Img fixed={partners[2].fixed} />
					</Col>
					</Slider>
				</Col>

				<Col xs={12} className={styles.desktopSlider} >
					
					<div xs={2} styles={{display:'grid', justifyItems:'flex-end'}}>
					<Img fixed={partners[0].fixed} />
					</div>
					<div xs={2}>
					<Img fixed={partners[1].fixed} />
					</div>
					<div xs={2}>
					<Img fixed={partners[2].fixed} />
					</div>
				</Col>
				
			</Row>
		</section>
	);
};

export default Partners;
