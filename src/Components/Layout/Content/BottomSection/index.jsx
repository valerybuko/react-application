import React from 'react';
import styled from 'styled-components';
import { BottomSectionStyles } from './style';
import Title from '../../../Title';
import Button from '../../../Button';
import colors from '../../../../themes/colors';

const TITLE_TEXT = 'Choose a better way to work';

const MainBottomSectionWrapper = styled.div`
    width: 100%;
    background-color: ${colors.lilac}
`;

const BottomSectionTitle = styled(Title)`
    flex: 1;
`;

const BottomSectionWrapper = styled.div`${BottomSectionStyles}`;

const BottonSectionButtomWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    max-width: 700px;
    
    @media (max-width: 1005px) {
        flex-direction: column;
        width: 100%;
    }
`;

const SlackButton = styled(Button)`
    background-color: ${colors.white};
    color: ${colors.lilac};
    width: 165px;
    padding: 19px 40px 20px;
    
      @media (max-width: 1005px) {
        width: 100%;
    }
`;

const ContactButton = styled(Button)`
    color: ${colors.white};
    border: 1px solid ${colors.white};
    opacity: 0.8;
    width: 205px;
    padding: 19px 40px 20px;
    
     @media (max-width: 1005px) {
       width: 100%; 
    }
`;

const BottomSection = (props) => (
    <MainBottomSectionWrapper>
        <BottomSectionWrapper>
            <BottomSectionTitle fontSize={'50px'}>{TITLE_TEXT}</BottomSectionTitle>
            <BottonSectionButtomWrapper>
                <SlackButton>TRY SLACK</SlackButton>
                <ContactButton>CONTACT SALES</ContactButton>
            </BottonSectionButtomWrapper>
        </BottomSectionWrapper>
    </MainBottomSectionWrapper>
);

export default BottomSection;
