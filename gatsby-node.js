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
        }
      }`);

	data.allContentfulBlogPosts.edges.forEach(({ node }) => {
		createPage({
			path: `blog/${node.slug}`,
			component: path.resolve(`src/templates/blog-post-template.js`),
			context: { slug: node.slug }
		});
	});
};
