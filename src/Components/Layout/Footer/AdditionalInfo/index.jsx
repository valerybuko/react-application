import React from 'react';
import styled from 'styled-components';
import { AdditionalInfoStyles } from './style';
import ContactInfo from './ContactInfo';
import SocialNetworkGroups from './SocialNetworkGroups';

const AdditonalInfoComponent = styled.div`${AdditionalInfoStyles}`;

const AdditionalInfo = (props) => (
    <AdditonalInfoComponent>
        <ContactInfo/>
        <SocialNetworkGroups/>
    </AdditonalInfoComponent>
);

export default AdditionalInfo;
