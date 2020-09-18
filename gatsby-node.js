const path = require(`path`);

// blog posts

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const { data } = await graphql(`{
        allContentfulBlogPosts {
          edges {
            node {
              slug
            }
          }
		}, 
		allContentfulServicePage {
		  edges {
			node {
			  slug
			}
		  }
		}
		
      }`);

	data.allContentfulBlogPosts.edges.forEach(({ node }) => {
		createPage({
			path: `blog/${node.slug}`,
			component: path.resolve(`src/templates/blog-post-template.js`),
			context: { slug: node.slug }
		});
	});

	data.allContentfulServicePage.edges.forEach(({ node }) => {
		createPage({
			path: `services/${node.slug}`,
			component: path.resolve(`src/templates/service-template.js`),
			context: { slug: node.slug }
		});
	});
};
