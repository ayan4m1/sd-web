import {
  faArrowCircleRight,
  faArrowCircleLeft
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

import SEO from 'components/seo';
import Layout from 'components/layout';

export default function IndexPage({ data }) {
  const {
    allFile: { nodes: images }
  } = data;
  const findImage = (url) =>
    url
      ? getImage(
          images.find((image) =>
            image.relativePath.endsWith(url.substring(url.lastIndexOf('/') + 1))
          ).childImageSharp.gatsbyImageData
        )
      : {};

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <h4 className="display-4">Featured Content</h4>
        <Row className="justify-content-center">
          <Col md={10}>
            <Carousel
              indicators={false}
              className="mt-5"
              nextIcon={
                <FontAwesomeIcon icon={faArrowCircleRight} color="black" />
              }
              prevIcon={
                <FontAwesomeIcon icon={faArrowCircleLeft} color="black" />
              }
            >
              {images.map((node) => (
                <Carousel.Item key={node.id}>
                  <GatsbyImage
                    image={findImage(node.uuid)}
                    alt="Featured Post"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "output" } }) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 800)
        }
      }
    }
  }
`;
