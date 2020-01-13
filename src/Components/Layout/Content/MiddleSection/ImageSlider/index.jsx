import React, { useState } from 'react';
import styled from 'styled-components';
import ImageLink from '../ImageLink';
import ImageSwitch from '../ImageSwitch';
import {
  ImageSwitchesWrapper,
  section1ImageURL,
  section1Text,
  section1URL,
  section2ImageURL,
  section2Text, section2URL, section3ImageURL, section3Text, section3URL,
} from '../index';
import { ImageSliderStyles } from './style';

const ImageSliderWrapper = styled.div`${ImageSliderStyles}`;

const ImageSlider = (props) => {
  const [isMark1, setMark1] = useState(true);
  const [isMark2, setMark2] = useState(false);
  const [isMark3, setMark3] = useState(false);
  return (
        <ImageSliderWrapper>
            {
                isMark1 ? <ImageLink imgSRC={section1ImageURL} text={section1Text} url={section1URL}/>
                  : isMark2 ? <ImageLink imgSRC={section2ImageURL} text={section2Text} url={section2URL}/>
                    : isMark3 ? <ImageLink imgSRC={section3ImageURL} text={section3Text} url={section3URL}/> : null
            }
            <ImageSwitchesWrapper>
                <ImageSwitch isMark={isMark1} onClick={() => { setMark1(true); setMark2(false); setMark3(false); }}/>
                <ImageSwitch isMark={isMark2} onClick={() => { setMark2(true); setMark1(false); setMark3(false); }}/>
                <ImageSwitch isMark={isMark3} onClick={() => { setMark3(true); setMark1(false); setMark2(false); }}/>
            </ImageSwitchesWrapper>
        </ImageSliderWrapper>
  );
};

export default ImageSlider;
