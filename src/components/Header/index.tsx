import React from 'react';
import { Link } from 'gatsby';
import './index.scss';

interface Props {
  siteTitle: string;
}

/**
 * Header component
 *
 * @param {Props} props
 */
const Header: React.FC<Props> = ({ siteTitle }) => <>
  <div className='header'>this is header</div>
</>;

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
