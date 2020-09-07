import React, { useState } from 'react';
import styles from '../navbar/navbar.module.css';
import { Link, useStaticQuery } from 'gatsby';
import { GiCancel, GiHamburgerMenu } from 'react-icons/gi';
import Links from '../../constants/Links';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import Img from 'gatsby-image';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { RiMapPin2Line } from 'react-icons/ri';

const query = graphql`
	query MyQuery {
		allContentfulHomepage {
			nodes {
				logo {
					fluid {
						...GatsbyContentfulFluid
					}
					title
				}
			}
		}
	}
`;

const Navbar = ({ textColor }) => {
	const data = useStaticQuery(query);

	const { logo: { fluid, title } } = data.allContentfulHomepage.nodes[0];
	const [ active, setActive ] = useState(false);

	return (
		<header className={styles.navbar}>
			<Col>
				<Row>
					<Col xs={12}>
						<Row className={styles.logoHolder}>
							<Col xs={4} md={2} lg={1} className={styles.logo}>
								<Img fluid={fluid} alt={title} />
							</Col>
							<Col xs={8}>
								<Row>
									<Col xs={4} className={styles.iconHolder}>
										<AiOutlineMail className={styles.icon} />
										Drop us an e-mail
									</Col>
									<Col xs={4} className={styles.iconHolder}>
										<AiOutlinePhone className={styles.icon} />
										Let's talk about your project
									</Col>
									<Col xs={4} className={styles.iconHolder}>
										<RiMapPin2Line className={styles.icon} />
										Find us on Google Maps
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>
					<Col sm={12}>
						<Row>
							<Col sm={10} className={styles.fullscreenNav}>
								<nav>
									<ul className={styles.fullscreenNavUl}>
										{Links.map((link) => (
											<li className={styles.fullscreenNavLi} key={uuidv4()}>
												<Link
													duration={1}
													className={styles.fullscreenNavLink}
													swipe
													top="entry"
													entryOffset={100}
													to={link.path}
													style={{ color: `${textColor}` }}
												>
													{link.text}
												</Link>
											</li>
										))}
									</ul>
								</nav>
							</Col>
							<Col sm={2} className={styles.fullscreenNavContactLink}>
								Contact Us <BsArrowRight className={styles.arrow} />
							</Col>
						</Row>
					</Col>
					{/* code in the below Col handles everything to do with the navbar when under 768 px */}
					<Col className={styles.mobileNav}>
						<Row className={styles.mobileNavRow}>
							<Col xs={4}>
								<Img fluid={fluid} alt={title} />
							</Col>
							<Col xs={2} className={styles.hamburgerHolder}>
								<GiHamburgerMenu
									className={styles.hamburgerMenu}
									onClick={() => setActive(!active)}
									style={{ color: `${textColor}` }}
								/>
								<nav
									// I opted to use inline styles here to make sure I could change the transform property with the active state. Might not be pretty but it got the job done
									style={{
										position: 'fixed',
										top: '0',
										right: '0',
										bottom: '0',
										left: '0',
										backgroundColor: 'black',
										display: 'flex',
										justifyContent: 'center',
										alignContent: 'center',
										overflowY: 'auto',
										transform: `${active ? 'scale(1)' : 'scale(0)'}`,
										transition: '0.5s'
									}}
								>
									<ul className={styles.ul}>
										{Links.map((link) => (
											<li className={styles.li} key={uuidv4()}>
												<Link className={styles.link} to={link.path}>
													{link.text}
												</Link>
											</li>
										))}
										<li>
											<GiCancel className={styles.cancel} onClick={() => setActive(!active)} />
										</li>
									</ul>
								</nav>
							</Col>
						</Row>
					</Col>
				</Row>
			</Col>
		</header>
	);
};

export default Navbar;
