import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image';
import styles from '../Testimonials/testimonials.module.css';
import TitleText from '../../Global/TitleText/TitleText';
import { AiFillStar } from 'react-icons/ai';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ProjectCard from '../../Global/ProjectCard/ProjectCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Testimonials = ({ testimonialHeaderImage, reviews, pastProjects }) => {
	console.log(pastProjects);

	const [ currentReviewNum, setcurrentReviewNum ] = useState(0);

	const changeReview = () => {
		if (currentReviewNum === 0) {
			setcurrentReviewNum(1);
		} else if (currentReviewNum === 1) {
			setcurrentReviewNum(2);
		} else {
			setcurrentReviewNum(0);
		}
	};

	let settings = {
		dots: false,
		arrows: false,
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
		<Row className={styles.testimonials}>
			<Col xs={12} md={5} className={styles.image}>
				<Img fluid={testimonialHeaderImage.fluid} alt={testimonialHeaderImage.fluid.title} />
			</Col>
			<Col xs={12} md={5} className={styles.contentHolder}>
				<Row>
					<TitleText
						title="TESTIMONIALS"
						subtitle="WHAT OUR CLIENTS SAY ABOUT US"
						content="We work very hard at making our name synonymous with quality and this is why our clients trust us"
						xs="12"
						md="8"
					/>
					<Col className={styles.review}>
						<p className={styles.reviewContent}>{reviews[currentReviewNum].review}</p>
						<AiFillStar className={styles.star} />
						<AiFillStar className={styles.star} />
						<AiFillStar className={styles.star} />
						<AiFillStar className={styles.star} />
						<AiFillStar className={styles.star} />
						<p className={styles.reviewName}>{reviews[currentReviewNum].name}</p>
						<p className={styles.reviewTitle}>{reviews[currentReviewNum].title}</p>
					</Col>
					<Col sm={12} style={{ textAlign: 'center' }}>
						<IoIosArrowBack onClick={changeReview} className={styles.circle} />
						<IoIosArrowForward onClick={changeReview} className={styles.circle} />
					</Col>
				</Row>
			</Col>
			<Col sm={12} className={styles.sliderHolder}>
				<Slider {...settings} className={styles.slider}>
					{pastProjects.map((project) => <ProjectCard src={project.fluid} content={project.title} />)}
				</Slider>
			</Col>
		</Row>
	);
};

export default Testimonials;
