import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import { Container, Table, Row, Col } from 'react-bootstrap';
import { parseISO, formatDistanceToNow } from 'date-fns';

import Layout from './layout';
import SEO from './seo';

export default function Image({ data }) {
  const {
    postgres: {
      imageBoostByUuid: {
        uuid,
        imageResultByImageResultId: {
          seed,
          steps,
          created,
          imageRequestByImageRequestId: { prompt, strength }
        }
      }
    },
    allFile: { nodes: images }
  } = data;

  const findImage = (uuid) =>
    uuid
      ? getImage(
          images.find((image) => image.relativePath === `${uuid}.png`)
            ?.childImageSharp?.gatsbyImageData
        )
      : {};

  return (
    <Layout>
      <SEO title="Stable Diffusion Image" description={prompt} />
      <Container className="mb-4">
        <Row>
          <Col xs={12}>
            <h1>
              <Link to="/images">Images</Link> &raquo; {uuid}
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <h2>Image</h2>
            <GatsbyImage image={findImage(uuid)} />
          </Col>
          <Col xs={12} sm={6}>
            <h2>Prompt</h2>
            <blockquote>{prompt}</blockquote>
            <h2>Parameters</h2>
            <Table striped>
              <thead>
                <tr>
                  <th style={{ width: '35%' }}>Name</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Seed</td>
                  <td>{seed}</td>
                </tr>
                <tr>
                  <td>Steps</td>
                  <td>{steps}</td>
                </tr>
                {strength && (
                  <tr>
                    <td>Strength</td>
                    <td>{strength.toFixed(2)}</td>
                  </tr>
                )}
              </tbody>
            </Table>
            <h2>Created</h2>
            <p title={created}>
              {formatDistanceToNow(parseISO(created), { addSuffix: true })}
            </p>
          </Col>
        </Row>
      </Container>
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
        uuid
        imageResultByImageResultId {
          seed
          steps
          created
          imageRequestByImageRequestId {
            strength
            prompt
          }
        }
      }
    }

    allFile {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 512)
        }
      }
    }
  }
`;
