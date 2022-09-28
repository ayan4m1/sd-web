import { Container } from 'react-bootstrap';

import Layout from 'components/layout';
import SEO from 'components/seo';

export default function AboutPage() {
  return (
    <Layout>
      <SEO title="About" description="Explanation of this project" />
      <Container>
        <h1>About</h1>
        <p>Coming Soon &trade;</p>
      </Container>
    </Layout>
  );
}
