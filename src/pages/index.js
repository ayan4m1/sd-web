import {
  faArrowCircleRight,
  faArrowCircleLeft
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

import SEO from 'components/seo';
import Layout from 'components/layout';
import { getImageUrl } from 'utils';
import { Fragment } from 'react';

export default function IndexPage({ data }) {
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

  const filteredBoosts = boosts.filter((node) => Boolean(node.paid));

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        {filteredBoosts.length ? (
          <Fragment>
            <h1>Newest Images</h1>
            <Row className="justify-content-center">
              <Col md={10}>
                <Carousel
                  indicators={false}
                  className="mt-4"
                  nextIcon={
                    <FontAwesomeIcon icon={faArrowCircleRight} color="black" />
                  }
                  prevIcon={
                    <FontAwesomeIcon icon={faArrowCircleLeft} color="black" />
                  }
                >
                  {filteredBoosts
                    .slice(0, Math.min(5, filteredBoosts.length))
                    .map((node) => (
                      <Carousel.Item key={node.uuid}>
                        <Row>
                          <Col xs={2}></Col>
                          <Col xs={8} className="text-center">
                            <Link to={getImageUrl(node)}>
                              <GatsbyImage
                                image={findImage(node.uuid)}
                                alt="Featured Post"
                              />
                            </Link>
                          </Col>
                        </Row>
                      </Carousel.Item>
                    ))}
                </Carousel>
              </Col>
            </Row>
          </Fragment>
        ) : (
          <h1>Check back soon for images!</h1>
        )}
      </Container>
    </Layout>
  );
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export const query = graphql`
  query {
    postgres {
      allImageBoosts(condition: { cancelled: null }, orderBy: PAID_DESC) {
        nodes {
          uuid
          paid
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
