import React from 'react';
import styled from 'styled-components';
import Logo from '../../../Logo';
import CloseMenu from '../../../CloseMenu';
import Button from '../../../Button';
import colors from '../../../../themes/colors';
import { defaultFonts } from '../../../../themes/fonts';

const HamburgerMenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const LogoPartWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 0 0 40px;
`;

const LinkList = styled.ul`
    list-style-type: none;
`;

const LinkItem = styled.li`
    padding: 60px 0;
`;

const OuterHamburgerMenuLink = styled.a`
    font-size: ${defaultFonts.bodyFontSize}
    text-decoration: none;
    color: ${colors.gray};
    
    &:hover {
        color: ${colors.darkblue_experssed};
        cursor: pointer;
        text-decoration: underline;
    }
`;

const ButtonHamburgerMenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const LinkButtonWrapper = styled.a`
    flex: 1;
`;

const SignInHamburgerMenuButton = styled(Button)`
    background-color: ${colors.white};
    color: ${colors.lilac};
    border: 1px solid ${colors.lilac};
    margin: 10px;
    flex: 1;
    
    &:hover {
        cursor: pointer;
    }
`;

const DownloadButton = styled(Button)`
    margin: 10px;
    flex: 1; 
    
    &:hover {
        cursor: pointer;
    }
`;

const ButtonTextLink = styled.a`
    text-decoration: none;
    flex: 1;
    display: flex;
`;

const ButtonDownloadTextLink = styled(ButtonTextLink)`
    flex: 1;
    display: flex;
    color: ${colors.white};
`;

const ButtonWrapper = styled.div`
    flex: 1;
`;

const HamburgerMenu = (props) => (
    <HamburgerMenuWrapper>
        <LogoPartWrapper>
            <Logo/>
            <CloseMenu/>
        </LogoPartWrapper>
        <LinkList>
            <LinkItem>
                <OuterHamburgerMenuLink href={'https://slack.com/intl/en-by/features'}> Why Slack?</OuterHamburgerMenuLink>
            </LinkItem>
            <LinkItem>
                <OuterHamburgerMenuLink>Solutions</OuterHamburgerMenuLink>
            </LinkItem>
            <LinkItem>
                <OuterHamburgerMenuLink>Resourses</OuterHamburgerMenuLink>
            </LinkItem>
            <LinkItem>
                <OuterHamburgerMenuLink href={'https://slack.com/intl/en-by/pricing'}>Pricing</OuterHamburgerMenuLink>
            </LinkItem>
        </LinkList>
        <ButtonHamburgerMenuWrapper>
            <ButtonWrapper>
                <ButtonTextLink href={'https://slack.com/signin'}>
                    <SignInHamburgerMenuButton>SING IN</SignInHamburgerMenuButton>
                </ButtonTextLink>
            </ButtonWrapper>
            <ButtonWrapper>
                <ButtonDownloadTextLink href={'https://slack.com/intl/en-by/downloads/windows'}>
                    <DownloadButton>DOWNLOAD SLACK</DownloadButton>
                </ButtonDownloadTextLink>
            </ButtonWrapper>
        </ButtonHamburgerMenuWrapper>
    </HamburgerMenuWrapper>
);

export default HamburgerMenu;
