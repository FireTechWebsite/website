/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */

	siteMetadata: {
		title: 'Firetech',
		titleTemplate: '%s',
		description: `Welcome to Firetech, Sri Lanka's premier fire engineering company with over 35 years of experience`,
		siteUrl: 'https://firetech-staging.netlify.app', // No trailing slash allowed!
		image: '/images/image.png', // Path to your image you placed in the 'static' folder
		twitterUsername: '@FiretechSL',
		author: 'firetech'
	},
	plugins: [
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `m6zvhnotn41k`,
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: `oJSsPwHuXPJp_1VVvr0Yd6kLiGUvrtVQE3x93xclEE8`
			}
		},
		`gatsby-plugin-smoothscroll`,
		`gatsby-plugin-react-helmet`
	]
};
