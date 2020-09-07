/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	plugins: [
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `m6zvhnotn41k`,
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: `oJSsPwHuXPJp_1VVvr0Yd6kLiGUvrtVQE3x93xclEE8`
			}
		}
	]
};
