import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from '../Components/Global/Page-CSS/blogTemplate.module.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { MARKS, INLINES, BLOCKS } from '@contentful/rich-text-types';
import { graphql } from 'gatsby';
import Layout from '../Components/Global/Layout/Layout';
import Img from 'gatsby-image';
import SEO from '../Components/Global/SEO';

const website_url = 'https://firetech-staging.netlify.app/';

const BlogPostTemplate = ({ data }) => {
	console.log(data);
	const {
		image: { fluid, title },
		contentOfBlogPost,
		publishedData,
		titleOfPost,
		readingTime,
		description: { descriptionOfPost },
		slug
	} = data.contentfulBlogPosts;

	const options = {
		renderMark: {
			[MARKS.BOLD]: (text) => <strong>{text}</strong>
		},
		renderNode: {
			[BLOCKS.PARAGRAPH]: (node, children) => <p className={styles.p}>{children}</p>,
			'embedded-asset-block': (node) => {
				return (
					<img
						className="img-fluid"
						src={node.data.target.fields.file['en-US'].url}
						alt={node.data.target.fields.title['en-US']}
					/>
				);
			},
			[INLINES.HYPERLINK]: (node) => {
				if (node.data.uri.indexOf('youtube.com') !== -1) {
					return (
						<div className={styles.videoHolder}>
							<iframe
								title="YouTube Video"
								id="ytplayer"
								src={node.data.uri}
								type="text/html"
								width="640"
								height="360"
								frameBorder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture ; fullscreen"
							/>
						</div>
					);
				} else
					return (
						<a
							href={node.data.uri}
							target={`${node.data.uri.startsWith(website_url) ? '_self' : '_blank'}`}
							rel={`${node.data.uri.startsWith(website_url) ? '' : 'noopener noreferrer'}`}
						>
							{node.content[0].value}
						</a>
					);
			}
		}
	};

	const { json } = contentOfBlogPost;

	return (
		<Layout>
			<SEO title={titleOfPost} description={descriptionOfPost} image={fluid.src} pathname={slug} article />

			<Row>
				<Col xs={12} className={styles.blogPost}>
					<Row className={styles.contentHolder}>
						<Col className={styles.coverImageHolder} xs={12} style={{ padding: '0rem' }}>
							<Img fluid={fluid} alt={title} className={styles.coverImage} />
						</Col>
						<Col xs={12} md={8} className={styles.blogPostContent}>
							<h1 className={styles.title}>{titleOfPost}</h1>
							<Row className={styles.postInfo}>
								<Col xs={12} sm={6} className={styles.publishedDate}>
									{publishedData}
								</Col>
								<Col xs={12} sm={6} className={styles.readingTime}>
									{readingTime} Minutes
								</Col>
							</Row>
							{documentToReactComponents(json, options)}
						</Col>
					</Row>
				</Col>
			</Row>
		</Layout>
	);
};

export const query = graphql`
	query($slug: String) {
		contentfulBlogPosts(slug: { eq: $slug }) {
			slug
			titleOfPost: title
			description {
				descriptionOfPost: description
			}
			publishedData(formatString: "MMMM Do, YYYY")
			readingTime
			image {
				fluid(maxWidth: 2000, quality: 100) {
					...GatsbyContentfulFluid
				}
				title
			}
			contentOfBlogPost {
				json
			}
		}
	}
`;

export default BlogPostTemplate;
