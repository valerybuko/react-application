import React from 'react';
import styled from 'styled-components';
import { ContactInfoStyles } from './style';
import colors from '../../../../../themes/colors';
import LinkItem from '../../../../LinkItem';

const ContactInfoComponent = styled.div`${ContactInfoStyles}`;

const FooterContactLink = styled(LinkItem)`
    color: ${colors.darkgray};
    text-decoration: none;
    display: inline-block;
    margin: 5px;
    padding: 15px;
     
    &:hover {
        color: ${colors.darkblue};
        text-decoration: none;
        display: inline-block;
    }
    
    &:active {
        border: none;
    }
`;

const ContactInfo = (props) => (
    <ContactInfoComponent>
        <FooterContactLink href={'https://status.slack.com/'}>Status</FooterContactLink>
        <FooterContactLink href={'https://slack.com/intl/en-by/legal'}>Privacy & Terms</FooterContactLink>
        <FooterContactLink href={'https://slack.com/intl/en-by/help/contact'}>Contact Us</FooterContactLink>
    </ContactInfoComponent>
);

export default ContactInfo;
