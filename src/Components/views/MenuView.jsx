import React from 'react';
import styled from 'styled-components';
import {MainContainerStyles} from './styles/MainContainer';
import {HeaderStyles} from './styles/Header';
import {SectionStyles} from './styles/Section';
import {FooterStyles} from './styles/Footer';
import Logo from '../Logo';
import {
    linkdata,
    logoURL,
    getStartedURL,
    signInURL,
} from '../../mockdata/linkdata';
import LinkItem from '../LinkItem';
import Button from '../Button';
// eslint-disable-next-line import/named
import Title from '../Title';

const MainContainer = styled.div`${MainContainerStyles}`;
const Header = styled.div`${HeaderStyles}`;
const Section = styled.section`${SectionStyles}`;
const Footer = styled.div`${FooterStyles}`;

const headerNavbar = linkdata.map((link) => <LinkItem key={link.id} href={link.href}>
    {link.text}
</LinkItem>);

const MenuView = () => (
    <MainContainer>
        <Header>
            <LinkItem href={logoURL}><Logo/></LinkItem>
            {headerNavbar}
            <LinkItem href={signInURL}>Sign In</LinkItem>
            <LinkItem href={getStartedURL}><Button>Get started</Button></LinkItem>
        </Header>
        <Section>
            <Title fontSize={'54px'}>Slack replaces email</Title>
            <Title fontSize={'54px'}>inside your company</Title>
            <p>Keep conversations organized in Slack,<br/> the smart alternative to email.</p>
            <Button>Try slack</Button>
            <Button>See the demo</Button>
            <p>Already using Slack?<LinkItem href={'signInURL'}>Sing in</LinkItem></p>
        </Section>
        <Section>
            <Title fontSize={'54px'}> What’s new at Slack</Title>
            <div>
                <LinkItem href={'https://slackhq.com/work-is-fueled-by-true-engagement?geocode=en-by&utm_source=hppromo&utm_medium=promo'}>
                <img src="https://a.slack-edge.com/b4782/marketing/img/promos/2019-10-10-engagement.jpg"
                     srcSet="https://a.slack-edge.com/b4782/marketing/img/promos/2019-10-10-engagement.jpg 1x, https://a.slack-edge.com/b4782/marketing/img/promos/2019-10-10-engagement@2x.jpg 2x"
                     alt="" width={'200px'}/>
                {/* eslint-disable-next-line max-len */}
                <Title fontSize={'12px'}>Not all Daily Active Users are created equal: Work is fueled by true engagement</Title>
                </LinkItem>
            </div>
        </Section>
        <Section></Section>
        <Footer></Footer>
    </MainContainer>
);

export default MenuView;
