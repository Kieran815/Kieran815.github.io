const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  //called when node created/updated
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      //adds slug to pages graphql query -> allMarkdownRemark { edges { node { fields { slug }}}}
      node,
      name: `slug`,
      value: slug,
    });
  }
};
