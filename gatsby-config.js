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
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				// You can add multiple tracking ids and a pageview event will be fired for all of them.
				trackingIds: [ 269596761 ],
				gtagConfig: {
					anonymize_ip: true,
					cookie_expires: 0
				},
				// This object is used for configuration specific to this plugin
				pluginConfig: {
					// Puts tracking script in the head instead of the body
					head: false,
					// Setting this parameter is also optional
					respectDNT: true,
					// Avoids sending pageview hits from custom paths
					exclude: [ '/preview/**', '/do-not-track/me/too/' ]
				}
			}
		}
	]
};
