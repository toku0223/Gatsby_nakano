const path = require(`path`);
const slash = require(`slash`);
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  // we use the provided allContentfulPost query to fetch the data from Contentful
  return graphql(
    `
      {
        allContentfulPost {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      console.log("Error retrieving contentful data", result.errors);
    }
    // Resolve the paths to our template
    const blogArticleTemplate = path.resolve("./src/templates/post.js");
    // Then for each result we create a page.
    result.data.allContentfulBlogArticle.edges.forEach(edge => {
      createPage({
        path: `/post/${edge.node.slug}/`,
        component: slash(blogArticleTemplate),
        context: {
          slug: edge.node.slug,
          id: edge.node.id
        }
      });
    });
  })
    .catch(error => {
      console.log("Error retrieving contentful data", error);
    });
};