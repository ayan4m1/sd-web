import { formatDistanceToNow, parseISO } from 'date-fns';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

import Layout from 'components/layout';
import SEO from 'components/seo';
import { getImageUrl } from 'utils';

export default function ImagesPage({ data }) {
  const {
    postgres: {
      allImageBoosts: { nodes: boosts }
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

  const filteredBoosts = boosts.filter((boost) => Boolean(boost.paid));

  return (
    <Layout>
      <SEO title="Images" description="Browse images" />
      <Container>
        <Row>
          <Col xs={12}>
            <h1>Images</h1>
            <Table striped>
              <thead>
                <tr>
                  <th>Thumbnail</th>
                  <th>Prompt</th>
                  <th>Created</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {filteredBoosts.length ? (
                  filteredBoosts.map((boost) => (
                    <tr key={boost.uuid}>
                      <td>
                        <GatsbyImage
                          image={findImage(
                            boost.imageResultByImageResultId.uuid
                          )}
                        />
                      </td>
                      <td>
                        {
                          boost.imageResultByImageResultId
                            .imageRequestByImageRequestId.prompt
                        }
                      </td>
                      <td>
                        {formatDistanceToNow(
                          parseISO(boost.imageResultByImageResultId.created),
                          { addSuffix: true }
                        )}
                      </td>
                      <td>
                        <Link to={getImageUrl(boost)}>
                          <Button variant="primary">View</Button>
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4}>No images to display.</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

ImagesPage.propTypes = {
  data: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query {
    postgres {
      allImageBoosts(orderBy: PAID_DESC) {
        nodes {
          uuid
          paid
          imageResultByImageResultId {
            uuid
            created
            imageRequestByImageRequestId {
              prompt
            }
          }
        }
      }
    }

    allFile {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 128)
        }
      }
    }
  }
`;
