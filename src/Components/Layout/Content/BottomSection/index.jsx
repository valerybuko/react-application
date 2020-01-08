import React from 'react';
import styled from 'styled-components';
import { BottomSectionStyles } from './style';
import Title from '../../../Title';
import Button from "../../../Button";

const TITLE_TEXT = 'Choose a better way to work';

const BottomSectionWrapper = styled.div`${BottomSectionStyles}`;

const BottomSectionButtomWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const BottomSection = (props) => (
    <BottomSectionWrapper>
        <Title fontSize={'50px'}>{TITLE_TEXT}</Title>
        <BottomSectionButtomWrapper>
            <Button>TRY SLACK</Button>
            <Button>CONTACT SALES</Button>
        </BottomSectionButtomWrapper>
    </BottomSectionWrapper>
);

export default BottomSection;
