import React from 'react';

import styled from 'styled-components';
import { LinkStyles } from './styles';

const LinkItem = styled.a`
  ${LinkStyles}
`;

const Link = ({ title, children }) => (<LinkItem>{title}{children}</LinkItem>);

export default Link;
