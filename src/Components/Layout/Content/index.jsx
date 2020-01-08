import React from 'react';
import styled from 'styled-components';
import { ContentStyles } from './style';
import TopSection from './TopSection';
import MiddleSection from './MiddleSection';


const ContentWrapper = styled.main`${ContentStyles}`;

const Content = (props) => (
    <ContentWrapper>
        <TopSection/>
        <MiddleSection/>
    </ContentWrapper>
);

export default Content;
