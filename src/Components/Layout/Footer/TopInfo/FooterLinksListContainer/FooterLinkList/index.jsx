import React from 'react';
import styled from 'styled-components';
import { FooterLinkListStyles } from './style';

const FooterLinkListComponent = styled.ul`${FooterLinkListStyles}`;

const FooterLinkList = (props) => (
    <FooterLinkListComponent>
        {props.children}
    </FooterLinkListComponent>
);

export default FooterLinkList;
