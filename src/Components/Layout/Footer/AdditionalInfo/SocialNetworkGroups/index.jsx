import React from 'react';
import styled from 'styled-components';
import { SocialNetworkGrounpStyles } from './style';
import TwitterLogo from './SocialNetworksLogo/LogoWrapper/TwitterLogo';
import FacebookLogo from './SocialNetworksLogo/LogoWrapper/FacebookLogo';
import YouTubeLogo from './SocialNetworksLogo/LogoWrapper/YoutubeLogo';
import LinkedInLogo from './SocialNetworksLogo/LogoWrapper/LinkedInLogo';
import LogoWrapper from './SocialNetworksLogo/LogoWrapper';
import LinkItem from '../../../../LinkItem';

const SocialNetworkGroupsComponent = styled.div`${SocialNetworkGrounpStyles}`;

const FooterSocialNetworkLink = styled(LinkItem)`
    margin: 0;
    padding: 0;
   
    &:active {
        border: none;
        padding: 0;
    }
`;

const SocialNetworkGroups = (props) => (
    <SocialNetworkGroupsComponent>
        <LogoWrapper>
            <FooterSocialNetworkLink href={'https://twitter.com/slackhq'}><TwitterLogo/></FooterSocialNetworkLink>
        </LogoWrapper>
        <LogoWrapper>
            <FooterSocialNetworkLink href={'https://www.facebook.com/slackhq'}><FacebookLogo/></FooterSocialNetworkLink>
        </LogoWrapper>
        <LogoWrapper>
            <FooterSocialNetworkLink href={'https://www.youtube.com/channel/UCY3YECgeBcLCzIrFLP4gblw'}><YouTubeLogo/></FooterSocialNetworkLink>
        </LogoWrapper>
        <LogoWrapper>
            <FooterSocialNetworkLink href={'https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGYjTrAENHN9AAAAW9rPNNQ9vL83OxJZwAvklGsbNaEcibi96BYlS4B-HkNPzlp1qQxmmnyE4lSm2AWgXMEBpsnq3p4u_3n0_KmNJXlwzcMuoWrd-vJDFlzzxFpR-Rx7Sug0To=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Ftiny-speck-inc%2F'}><LinkedInLogo/></FooterSocialNetworkLink>
        </LogoWrapper>
    </SocialNetworkGroupsComponent>
);

export default SocialNetworkGroups;
