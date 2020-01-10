import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { MiddleSectionStyles } from './style';
import Title from '../../../Title';
import ImageLink from './ImageLink';
import ImageSwitch from './ImageSwitch';

const MiddleSectionWrapper = styled.div`${MiddleSectionStyles}`;

const section1ImageURL = 'https://a.slack-edge.com/b4782/marketing/img/promos/2019-10-10-engagement.jpg';
const section1Text = 'Not all Daily Active Users are created equal: Work is fueled by true engagement';
const section1URL = 'https://slackhq.com/work-is-fueled-by-true-engagement?geocode=en-by&utm_source=hppromo&utm_medium=promo';

const section2ImageURL = 'https://a.slack-edge.com/ebeb3/marketing/img/promos/shared-channels-hp-promo.png';
const section2Text = 'Shared channels: A better way to work with people outside your company';
const section2URL = 'https://slack.com/intl/en-by/resources/using-slack/setting-up-a-shared-channel?utm_medium=general%20promotion&utm_source=hppromo&utm_campaign=cd_general%20promotion_hppromo_all_en_sharedchannels-betterinvites_cr-hppromo-update_ym-201911?geocode=en-by&utm_source=hppromo&utm_campaign=cd_promo_hppromo_all_en_all_cr-promocard_slackcom_ym-201909&utm_medium=promo';

const section3ImageURL = 'https://a.slack-edge.com/80588/marketing/img/promos/gsuite-calendar-email-files.png';
const section3Text = 'Slack and G Suite bring productivity to your everyday work';
const section3URL = 'https://slackhq.com/slack-gsuite-calendar-email-files?geocode=en-by&utm_source=hppromo&utm_campaign=cd_general%20promotion_hppromo_us_en_ym-201906&utm_medium=general%20promotion';

const ImageLinksWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    
    @media (max-width: 1070px) {
        flex-direction: column;
        align-items: center;
    }
`;

const ImageSwitchesWrapper = styled.div`
    display: flex;
`;

const MiddleSection = (props) => {
  function useWindowWidthSize() {
    const [size, setSize] = useState([0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth]);
      }

      window.addEventListener('resize', updateSize);
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  const windowWidthSize = useWindowWidthSize();

  const [isMark1, setMark1] = useState(true);
  const [isMark2, setMark2] = useState(false);
  const [isMark3, setMark3] = useState(false);


  return (
        <MiddleSectionWrapper>
            <Title fontSize={'50px'}>What’s new at Slack</Title>
            <ImageLinksWrapper>
                {
                    (windowWidthSize <= 1070)
                      ? <>
                            <ImageLink imgSRC={section1ImageURL} text={section1Text} url={section1URL}/>
                            <ImageSwitchesWrapper>
                                <ImageSwitch isMark={isMark1} onClick={() => { setMark1(true); setMark2(false); setMark3(false); }}/>
                                <ImageSwitch isMark={isMark2} onClick={() => { setMark2(true); setMark1(false); setMark3(false); }}/>
                                <ImageSwitch isMark={isMark3} onClick={() => { setMark3(true); setMark1(false); setMark2(false); }}/>
                            </ImageSwitchesWrapper>
                      </>
                      : <>
                            <ImageLink imgSRC={section1ImageURL} text={section1Text} url={section1URL}/>
                            <ImageLink imgSRC={section2ImageURL} text={section2Text} url={section2URL}/>
                            <ImageLink imgSRC={section3ImageURL} text={section3Text} url={section3URL}/>
                      </>
                }
            </ImageLinksWrapper>
        </MiddleSectionWrapper>
  );
};

export default MiddleSection;
