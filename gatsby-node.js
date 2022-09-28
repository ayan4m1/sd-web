const { resolve } = require('path');
const { getImageUrl } = require('./src/utils');

const createImagePages = async ({ actions, graphql, reporter }) => {
  const component = resolve(`src/components/image.js`);
  const { createPage } = actions;
  const result = await graphql(`
    query {
      postgres {
        allImageBoosts(condition: { cancelled: null }) {
          nodes {
            uuid
            paid
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  let counter = 0;

  result.data.postgres.allImageBoosts.nodes.forEach((node) => {
    if (!node.paid) {
      return;
    }

    const path = getImageUrl(node);

    reporter.info(`Created page for ${path}`);
    counter++;
    createPage({
      context: node,
      component,
      path
    });
  });

  reporter.info(`Created ${counter} image pages!`);
};

exports.createPages = async (options) => {
  await createImagePages(options);
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [resolve(__dirname, 'src'), 'node_modules']
    }
  });
};
