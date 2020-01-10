import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { MiddleSectionStyles } from './style';
import Title from '../../../Title';
import ImageLink from './ImageLink';
import ImageSlider from './ImageSlider';

const MiddleSectionWrapper = styled.div`${MiddleSectionStyles}`;

export const section1ImageURL = 'https://a.slack-edge.com/b4782/marketing/img/promos/2019-10-10-engagement.jpg';
export const section1Text = 'Not all Daily Active Users are created equal: Work is fueled by true engagement';
export const section1URL = 'https://slackhq.com/work-is-fueled-by-true-engagement?geocode=en-by&utm_source=hppromo&utm_medium=promo';

export const section2ImageURL = 'https://a.slack-edge.com/ebeb3/marketing/img/promos/shared-channels-hp-promo.png';
export const section2Text = 'Shared channels: A better way to work with people outside your company';
export const section2URL = 'https://slack.com/intl/en-by/resources/using-slack/setting-up-a-shared-channel?utm_medium=general%20promotion&utm_source=hppromo&utm_campaign=cd_general%20promotion_hppromo_all_en_sharedchannels-betterinvites_cr-hppromo-update_ym-201911?geocode=en-by&utm_source=hppromo&utm_campaign=cd_promo_hppromo_all_en_all_cr-promocard_slackcom_ym-201909&utm_medium=promo';

export const section3ImageURL = 'https://a.slack-edge.com/80588/marketing/img/promos/gsuite-calendar-email-files.png';
export const section3Text = 'Slack and G Suite bring productivity to your everyday work';
export const section3URL = 'https://slackhq.com/slack-gsuite-calendar-email-files?geocode=en-by&utm_source=hppromo&utm_campaign=cd_general%20promotion_hppromo_us_en_ym-201906&utm_medium=general%20promotion';

const ImageLinksWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    
    @media (max-width: 1070px) {
      display: none;
    }
`;

const ImageSliderWrapper = styled.div`
    display: none;
    flex-direction: row;
    justify-content: space-around;
    
    @media (max-width: 1070px) {
      display: block;
    }
`;

export const ImageSwitchesWrapper = styled.div`
    display: flex;
`;

const MiddleSection = (props) => (
        <MiddleSectionWrapper>
            <Title fontSize={'50px'}>What’s new at Slack</Title>
            <ImageLinksWrapper>
                <ImageLink imgSRC={section1ImageURL} text={section1Text} url={section1URL}/>
                <ImageLink imgSRC={section2ImageURL} text={section2Text} url={section2URL}/>
                <ImageLink imgSRC={section3ImageURL} text={section3Text} url={section3URL}/>
            </ImageLinksWrapper>
          <ImageSliderWrapper>
            <ImageSlider/>
          </ImageSliderWrapper>
        </MiddleSectionWrapper>
);

export default MiddleSection;
