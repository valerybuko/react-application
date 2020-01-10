import React from 'react';
import styled from 'styled-components';
import { ImageSwitchStyles } from './style';

const ImageSwitchComponent = styled.div`${ImageSwitchStyles}`;

const ImageSwitch = (props) => (
    <ImageSwitchComponent {...props}>

    </ImageSwitchComponent>
);

export default ImageSwitch;
