import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faImagePortrait,
  faImages,
  faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';

export default function Header({ siteTitle = '' }) {
  return (
    <Fragment>
      <Navbar variant="dark" bg="primary" expand="lg">
        <Container>
          <Navbar.Brand>
            <Nav.Link as={Link} to="/">
              <FontAwesomeIcon icon={faImagePortrait} size="lg" /> {siteTitle}
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-3">
              <Nav.Link as={Link} to="/images">
                <FontAwesomeIcon icon={faImages} /> Images
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                <FontAwesomeIcon icon={faQuestionCircle} /> About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};
