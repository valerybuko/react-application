import React from 'react';
import styled from 'styled-components';
import { ContentStyles } from './style';
import TopSection from './TopSection';
import MiddleSection from './MiddleSection';
import BottomSection from './BottomSection';


const ContentWrapper = styled.main`${ContentStyles}`;

const Content = (props) => (
    <ContentWrapper>
        {props.children}
        <TopSection/>
        <MiddleSection/>
        <BottomSection/>
    </ContentWrapper>
);

export default Content;
