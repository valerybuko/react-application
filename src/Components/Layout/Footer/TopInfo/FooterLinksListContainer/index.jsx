import React from 'react';
import styled from 'styled-components';
import { FooterLinkListContainerStyles } from './style';
import FooterLinkList from './FooterLinkList';
import LinkItem from '../../../../LinkItem';
import colors from '../../../../../themes/colors';

const LinkItemFooter = styled(LinkItem)`
    color: ${colors.gray};
    text-decoration: none;
    display: inline-block;
    margin: 5px;
     
    &:hover {
        color: ${colors.darkblue};
        text-decoration: none;
        display: inline-block;
        margin: 5px;
    }
    
    &:active {
        border: none;
        padding: 0;
    }
`;

const FooterTitle = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: ${colors.darkgray}
`;

const FooterLinkListContainerComponent = styled.div`${FooterLinkListContainerStyles}`;

const FooterLinkListSection = styled.div`
    display: flex;
    flex-direction: row;
    
    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

const FooterLinkListContainer = (props) => (
    <FooterLinkListContainerComponent>
        <FooterLinkListSection>
            <FooterLinkList>
                <FooterTitle fontSize={'14px'}>PRODUCT</FooterTitle>
                <li><LinkItemFooter href={'https://slack.com/intl/en-by/features'}>Why slack</LinkItemFooter></li>
                <li><LinkItemFooter href={'https://slack.com/intl/en-by/enterprise'}>Security</LinkItemFooter></li>
                <li><LinkItemFooter href={'https://slack.com/intl/en-by/customer-stories'}>Customer
                    Stories</LinkItemFooter>
                </li>
            </FooterLinkList>
            <FooterLinkList>
                <FooterTitle fontSize={'14px'}>SLACK FOR TEAMS</FooterTitle>
                <li><LinkItemFooter
                    href={'https://slack.com/intl/en-by/solutions/engineering'}>Engineering</LinkItemFooter></li>
                <li><LinkItemFooter href={'https://slack.com/intl/en-by/solutions/sales'}>Sales</LinkItemFooter></li>
                <li><LinkItemFooter href={'https://slack.com/intl/en-by/solutions/human-resources'}>Human
                    Resources</LinkItemFooter></li>
            </FooterLinkList>
        </FooterLinkListSection>
        <FooterLinkListSection>
            <FooterLinkList>
                <FooterTitle fontSize={'14px'}>RESOURCES</FooterTitle>
                <li><LinkItemFooter href={'https://slack.com/intl/en-by/slack-tips'}>Slack Tips</LinkItemFooter></li>
                <li><LinkItemFooter href={'https://api.slack.com/'}>API</LinkItemFooter></li>
                <li><LinkItemFooter href={'https://slack.com/intl/en-by/downloads/windows'}>Download
                    Slack</LinkItemFooter>
                </li>
            </FooterLinkList>
            <FooterLinkList>
                <FooterTitle fontSize={'14px'}>COMPANY</FooterTitle>
                <li><LinkItemFooter href={'https://slack.com/intl/en-by/about'}>About Us</LinkItemFooter></li>
                <li><LinkItemFooter href={'https://slack.com/intl/en-by/newsroom'}>News</LinkItemFooter></li>
                <li><LinkItemFooter href={'https://slack.com/intl/en-by/careers'}>Careers</LinkItemFooter></li>
            </FooterLinkList>
        </FooterLinkListSection>
    </FooterLinkListContainerComponent>
);

export default FooterLinkListContainer;
