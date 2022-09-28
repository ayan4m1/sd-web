import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from './layout';
import SEO from './seo';

export default function Image({ data }) {
  const {
    postgres: {
      imageBoostByUuid: {
        imageResultByImageResultId: {
          uuid,
          imageRequestByImageRequestId: { prompt }
        }
      }
    }
  } = data;

  return (
    <Layout>
      <SEO title="Stable Diffusion Image" description={prompt} />
      <h1>{uuid}</h1>
      <p>{prompt}</p>
    </Layout>
  );
}

Image.propTypes = {
  data: PropTypes.object.isRequired
};

export const query = graphql`
  query ($uuid: String!) {
    postgres {
      imageBoostByUuid(uuid: $uuid) {
        imageResultByImageResultId {
          uuid
          imageRequestByImageRequestId {
            prompt
          }
        }
      }
    }
  }
`;
