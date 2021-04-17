/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */

	siteMetadata: {
		title: 'Firetech',
		titleTemplate: 'Firetech - %s',
		description: `Welcome to Firetech, Sri Lanka's premier fire engineering company with over 35 years of experience`,
		siteUrl: 'https://firetech.lk/', // No trailing slash allowed!
		image: 'https://i.ibb.co/2jxv9D5/index.png', // Path to your image you placed in the 'static' folder
		twitterUsername: '@FiretechSL',
		author: 'firetech'
	},
	plugins: [
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `m6zvhnotn41k`,
				accessToken: `oJSsPwHuXPJp_1VVvr0Yd6kLiGUvrtVQE3x93xclEE8`
			}
		},
		`gatsby-plugin-smoothscroll`,
		`gatsby-plugin-react-helmet`
	]
};
