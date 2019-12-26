import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MainContainerStyles } from './styles/MainContainer/MainContainer';
import { HeaderStyles } from './styles/Header/Header';
import { LogoStyles } from './styles/Header/Logo';
import { HeaderNavbarStyles } from './styles/Header/HeaderNavbar';
// eslint-disable-next-line import/named
import { HeaderLoginStyles } from './styles/Header/HeaderLogin';
import { Section1Styles } from './styles/Section1/Section1';
import { Section1ContainerStyles } from './styles/Section1/Section1Container';
import { Section2Styles } from './styles/Section2/Section2';
import { Section3Styles } from './styles/Section3/Section3';
import { FooterStyles } from './styles/Footer/Footer';
import Logo from '../Logo';
import {
  linkNavbarData,
  linkFooterData,
} from '../../mockdata/linkdata';
import LinkItem from '../LinkItem';
import Button from '../Button';
import Title from '../Title';
import Container from '../Container';
import { TitleWrapper2Styles } from './styles/Section2/TitleWrapper2';
import { LinkWrapperStyles } from './styles/Section2/LinkWrapper';
import { TitleWrapper3Styles } from './styles/Section3/TitleWrapper3';
import { ButtonWrapperStyles } from './styles/Section3/ButtonWrapper';
import navLinkStyles from './styles/Header/NavLink.module.css';
import { ApplicationStyles } from './styles/Application';

const MainContainer = styled.div`${MainContainerStyles}`;
const Header = styled.div`${HeaderStyles}`;
const LogoImage = styled.div`${LogoStyles}`;
const HeaderNavbar = styled.div`${HeaderNavbarStyles}`;
const HeaderLogin = styled.div`${HeaderLoginStyles}`;
const Section1 = styled.section`${Section1Styles}`;
const Sectiion1Container = styled.div`${Section1ContainerStyles}`;
const Section2 = styled.section`${Section2Styles}`;
const TitleWrapper2 = styled.div`${TitleWrapper2Styles}`;
const LinkWrapper = styled.div`${LinkWrapperStyles}`;
const Section3 = styled.section`${Section3Styles}`;
const TitleWrapper3 = styled.div`${TitleWrapper3Styles}`;
const ButtonWrapper = styled.div`${ButtonWrapperStyles}`;
const Footer = styled.div`${FooterStyles}`;

const ApplicationWrapper = styled.div`${ApplicationStyles}`;

const headerNavbar = linkNavbarData.map((link) => <LinkItem key={link.id} href={link.href}>
    {link.text}
</LinkItem>);

const footerNavbar = linkFooterData.map((link) => <LinkItem key={link.id} href={link.href}>
    {link.text}
</LinkItem>);


const MenuView = () => (
    <ApplicationWrapper>
        <MainContainer>
            <Header>
                <LogoImage>
                    <NavLink to={'/'}><Logo/></NavLink>
                </LogoImage>
                <HeaderNavbar>
                    {headerNavbar}
                </HeaderNavbar>
                <HeaderLogin>
                    <NavLink to={'sign'} className={navLinkStyles.nav}>Sign In</NavLink>
                    <NavLink to={'started'}><Button>Get started</Button></NavLink>
                </HeaderLogin>
            </Header>
            <Section1>
                <Sectiion1Container>
                    <Title fontSize={'32px'}>Slack replaces email</Title>
                    <Title fontSize={'32px'}>inside your company</Title>
                    {/* eslint-disable-next-line max-len */}
                    <p>Keep conversations organized in Slack,<br/> the smart alternative to email.</p>
                    <NavLink to={'started'}><Button>Try slack</Button></NavLink>
                    <NavLink to={'started'}><Button>Contact Sales</Button></NavLink>
                    <p>Already using Slack?<LinkItem href={'signInURL'}>Sing in</LinkItem></p>
                </Sectiion1Container>
            </Section1>
            <Section2>
                <TitleWrapper2>
                    <Title fontSize={'24px'}> What’s new at Slack</Title>
                </TitleWrapper2>
                <LinkWrapper>
                    <LinkItem
                        href={'https://slackhq.com/work-is-fueled-by-true-engagement?geocode=en-by&utm_source=hppromo&utm_medium=promo'}>
                        <Container>
                            <img src="https://a.slack-edge.com/b4782/marketing/img/promos/2019-10-10-engagement.jpg"
                                 srcSet="https://a.slack-edge.com/b4782/marketing/img/promos/2019-10-10-engagement.jpg 1x, https://a.slack-edge.com/b4782/marketing/img/promos/2019-10-10-engagement@2x.jpg 2x"
                                 alt="" width={'200px'}/>
                            {/* eslint-disable-next-line max-len */}
                            <Title fontSize={'24px'}>Not all Daily Active</Title>
                            <Title fontSize={'24px'}>Users are created equal: Work is fueled by true engagement</Title>
                        </Container>
                    </LinkItem>
                    <LinkItem
                        href={'https://slackhq.com/work-is-fueled-by-true-engagement?geocode=en-by&utm_source=hppromo&utm_medium=promo'}>
                        <Container>
                            <img src="https://a.slack-edge.com/ebeb3/marketing/img/promos/shared-channels-hp-promo.png"
                                 srcSet="https://a.slack-edge.com/ebeb3/marketing/img/promos/shared-channels-hp-promo.png 1x, https://a.slack-edge.com/ebeb3/marketing/img/promos/shared-channels-hp-promo@2x.png 2x"
                                 alt="" width={'200px'}/>
                            <Title fontSize={'24px'}>Shared channels: A</Title>
                            <Title fontSize={'24px'}>better way to work with people outside your company</Title>
                        </Container>
                    </LinkItem>
                    <LinkItem
                        href={'https://slackhq.com/work-is-fueled-by-true-engagement?geocode=en-by&utm_source=hppromo&utm_medium=promo'}>
                        <Container>
                            <img
                                src="https://a.slack-edge.com/80588/marketing/img/promos/gsuite-calendar-email-files.png"
                                srcSet="https://a.slack-edge.com/80588/marketing/img/promos/gsuite-calendar-email-files.png 1x, https://a.slack-edge.com/80588/marketing/img/promos/gsuite-calendar-email-files@2x.png 2x"
                                alt="" width={'200px'}/>
                            {/* eslint-disable-next-line max-len */}
                            <Title fontSize={'24px'}>Slack and G Suite bring productivity to your everyday work</Title>
                        </Container>
                    </LinkItem>
                </LinkWrapper>
            </Section2>
            <Section3>
                <TitleWrapper3>
                    <Title fontSize={'36px'}>Choose a better way to work</Title>
                </TitleWrapper3>
                <ButtonWrapper>
                    <Button>TRY SLACK</Button>
                    <Button>CONTACT SALES</Button>
                </ButtonWrapper>
            </Section3>
            <Footer>
                {footerNavbar}
            </Footer>
        </MainContainer>
    </ApplicationWrapper>
);

export default MenuView;
