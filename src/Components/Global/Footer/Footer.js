import React from 'react';
import styles from '../Footer/footer.module.css';
import { Col, Row } from 'react-bootstrap';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { AiFillPhone } from 'react-icons/ai';
import { RiMapPinFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import Links from '../../../constants/Links';
import { FiArrowUpCircle } from 'react-icons/fi';

const query = graphql`
	query {
		allContentfulBlogPosts(limit: 4, sort: { fields: publishedData, order: DESC }) {
			nodes {
				title
			}
		}
	}
`;

const Footer = () => {
	const data = useStaticQuery(query);

	return (
		<Row className={styles.footer}>
			<Col xs={12}>
				<Row>
					<Col xs={12} md={4} className={styles.content1}>
						<AiFillPhone className={styles.logo} />CONTACT US - 0114 410 558
					</Col>
					<Col xs={12} md={4} className={styles.content1}>
						<RiMapPinFill className={styles.logo} />FIND US - 34, Walter Gunesekara Mawatha, Nawala. Sri
						Lanka
					</Col>
					<Col xs={12} md={4} className={styles.content1}>
						<MdEmail className={styles.logo} />EMAIL - firetech@pan.lk
					</Col>
				</Row>
			</Col>
			<Col xs={12} className={styles.content2Holder}>
				<Row>
					<Col xs={12} md={3} className={styles.contentHolder}>
						<p className={styles.title}>ABOUT US</p>
						<p>
							Established in 1985, we are today the country's largest and most sought after fire
							engineering company. During the past 35 years, we have designed, supplied, installed and
							commissioned over 400 fire fighting systems in Sri Lanka and the Maldives.
						</p>
					</Col>
					<Col xs={12} md={3} className={styles.contentHolder}>
						<p className={styles.title}>SITE MAP</p>
						<ul>
							{Links.map((link) => (
								<li className={styles.linkHolder}>
									<Link to={link.path} className={styles.link}>
										{link.text}
									</Link>
								</li>
							))}
						</ul>
					</Col>
					<Col xs={12} md={3} className={styles.contentHolder}>
						<p className={styles.title}>LATEST NEWS</p>
						<ul>
							{data.allContentfulBlogPosts.nodes.map((post) => (
								<li className={styles.linkHolder}>
									<Link className={styles.link}>{post.title}</Link>
								</li>
							))}
						</ul>
					</Col>
					<Col xs={12} md={3} className={styles.contentHolder}>
						<p className={styles.title}>OUR CORE SERVICES</p>
						<ul>
							<li className={styles.linkHolder}>
								<Link className={styles.link}>Alarm Systems</Link>
							</li>
							<li className={styles.linkHolder}>
								<Link className={styles.link}>Clean Agent Suppression System</Link>
							</li>
							<li className={styles.linkHolder}>
								<Link className={styles.link}>Hydrant/Hose Reel Sprinkler System</Link>
							</li>
							<li className={styles.linkHolder}>
								<Link className={styles.link}>Wet Chemical Kitchen Hood Suppression </Link>
							</li>
						</ul>
					</Col>
				</Row>
			</Col>
			<Col xs={12} className={styles.credit}>
				<Row>
					<Col xs={12} md={4}>
						<p>Developed by Kishokanth</p>
					</Col>
					<Col xs={12} md={4}>
						<p>Copyrighted by Firetech Pvt Ltd</p>
					</Col>
					<Col xs={12} md={4}>
						Go tp the top <FiArrowUpCircle className={styles.arrow} />
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default Footer;
