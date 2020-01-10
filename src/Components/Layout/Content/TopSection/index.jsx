import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { TopSectionStyles } from './style';
import Title from '../../../Title';
import Button from '../../../Button';
import colors from '../../../../themes/colors';
import { defaultFonts } from '../../../../themes/fonts';
import LinkElement from '../../../LinkElement';

const DEMO_URL = 'https://slackdemo.com/';

const MainTopWrapper = styled.div`
    background-image: url('https://a.slack-edge.com/59662/marketing/img/homepage/video/brand-campaign_hero-poster.jpg');
`;

const TopSectionWrapper = styled.section`${TopSectionStyles}`;

const InfoWrapper = styled.div`
    max-width: 750px;
    display: flex;
    flex-direction: column;
`;

const ButtonTopSectionWrapper = styled.div`
    @media (max-width: 1023px) {
        display: flex;
        flex-direction: column;
    }
`;

const TopSectionSlackButton = styled(Button)`
   margin-left: 0;
   padding: 19px 40px 20px;
   
   &:hover {
        cursor: pointer
   }
   
   @media (max-width: 1023px) {
        width: 70%;
   }
`;

const TopDemoSlackButton = styled(Button)`
   margin-left: 0;
   padding: 19px 40px 20px;
   background-color: ${colors.white}
   color: ${colors.lilac}
   border: 1px solid ${colors.lilac}
   
   &:hover {
        cursor: pointer
   }
   
    @media (max-width: 1023px) {
        width: 70%;
   }
`;

const ButtonSign = styled.span`
    font-weight: bold;
`;

const LabelWrapper = styled.span`
    color: ${colors.darkblue_experssed}
    text-decoration: underline;
    margin-left: 5px;
`;

const LightTitle = styled(Title)`
    font-family: ${defaultFonts.fontFamilyRegularTitle}
`;

const MediumTitle = styled(Title)`
    font-family: ${defaultFonts.fontFamilyMediumTitle}
`;

const TopSection = (props) => (
    <MainTopWrapper>
        <TopSectionWrapper>
        <InfoWrapper>
            <Title fontSize={'64px'}>Slack replaces email inside your company</Title>
            <MediumTitle fontSize={'20px'}>Keep conversations organized in Slack, the smart<br/> alternative to
                email.</MediumTitle>
            <ButtonTopSectionWrapper>
                <NavLink to={'try-slack'}>
                    <TopSectionSlackButton>
                        <ButtonSign>TRY SLACK</ButtonSign>
                    </TopSectionSlackButton>
                </NavLink>
                <LinkElement href={DEMO_URL}>
                    <TopDemoSlackButton>
                        <ButtonSign>SEE THE DEMO</ButtonSign>
                    </TopDemoSlackButton>
                </LinkElement>
            </ButtonTopSectionWrapper>
            <LightTitle fontSize={'14px'}>
                Already using Slack?
                <NavLink to={'sign-in-info'}><LabelWrapper>Sign in.</LabelWrapper></NavLink>
            </LightTitle>
        </InfoWrapper>
    </TopSectionWrapper>
    </MainTopWrapper>
);

export default TopSection;
