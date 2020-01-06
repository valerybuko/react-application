import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../../../Logo';
import CloseMenu from '../../../CloseMenu';
import Button from '../../../Button';
import colors from '../../../../themes/colors';
import { defaultFonts } from '../../../../themes/fonts';
import NextPointer from '../../../NextPointer';

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

const DropDownLink = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
`;

const HamburgerMenu = (props) => {
  const [dropDownLinkState1, setDropDownLinkState1] = useState(false);

  const handleLinkPointerClick1 = (e) => {
    const state = !dropDownLinkState1;
    setDropDownLinkState1(state);
  };

  const [dropDownLinkState2, setDropDownLinkState2] = useState(false);

  const handleLinkPointerClick2 = (e) => {
    const state = !dropDownLinkState2;
    setDropDownLinkState2(state);
  };

  return (
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
                    <OuterHamburgerMenuLink>
                        <DropDownLink onClick={handleLinkPointerClick1} dropDownLinkState={dropDownLinkState1}>
                            Solutions
                            <ul>
                                <li></li>
                            </ul>
                            <NextPointer pointerState={dropDownLinkState1}/>
                        </DropDownLink>
                    </OuterHamburgerMenuLink>
                </LinkItem>
                <LinkItem>
                    <OuterHamburgerMenuLink>
                        <DropDownLink onClick={handleLinkPointerClick2} dropDownLinkState={dropDownLinkState2}>
                            Resourses
                            <ul>
                                <li></li>
                            </ul>
                            <NextPointer pointerState={dropDownLinkState2}/>
                        </DropDownLink>
                    </OuterHamburgerMenuLink>
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
};

export default HamburgerMenu;
