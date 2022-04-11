const path = require("path");

// Programmatically create the pages for browsing blog posts
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    query {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `).then((results, errors) => {
    if (errors) return Promise.reject(errors);

    const posts = results.data.allMdx.edges;

    posts.forEach(({ node }, index) => {
      createPage({
        path: `/blog/${node.slug}`,
        component: path.resolve("./src/components/BlogLayout.js"),
        context: { pageId: node.id },
      });
    });
  });
};
