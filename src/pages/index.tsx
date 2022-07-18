import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="text-center">
         This is content page
      </div>
    </Layout>
  );
};

export default IndexPage;
