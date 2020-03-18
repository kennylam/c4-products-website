import React from 'react';
import { FourOhFour } from 'gatsby-theme-carbon';

const links = [
  { href: 'get-started/about', text: 'About' },
  { href: 'components/component-status', text: 'Components' },
  { href: 'patterns/pattern-status', text: 'Patterns' },
  { href: 'voice-and-tone', text: 'Voice and tone guide' },
];

const Custom404 = () => <FourOhFour links={links} />;

export default Custom404;
