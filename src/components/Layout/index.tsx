import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { uiSelector } from 'state/ui';

import Header from 'components/Header';
import Footer from 'components/Footer';

import 'assets/styles/global.css';

interface Props {
  children: React.ReactNode;
}

/**
 * Layout component
 *
 * @param {Props} props
 */
const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { themeMode } = useSelector(uiSelector);

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
