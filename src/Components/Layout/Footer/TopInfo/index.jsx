import React from 'react';
import styled from 'styled-components';
import { TopInfoStyles } from './style';
import FooterLinkListContainer from './FooterLinksListContainer';
import FooterLogoContainer from './FooterLogoContainer';


const TopInfoContainer = styled.div`${TopInfoStyles}`;

const TopInfo = (props) => (
    <TopInfoContainer>
        <FooterLogoContainer/>
        <FooterLinkListContainer/>
    </TopInfoContainer>
);

export default TopInfo;
