import React from 'react';
import styled from 'styled-components';
import InnerLink from './InnerLinkList/InnerLink';
import OuterLinkListContainer from './OuterLinkListContainer';
import colors from '../../../../../themes/colors';

const InnerLinkItem = styled.a`
    color: ${colors.black};
    text-decoration: none;
    display: inline-block;
    margin: 5px;
    padding: 0 10px;
    border: none;
     
    &:hover {
        color: ${colors.darkblue};
        text-decoration: underline; 
        cursor: pointer;
    }
    
    &:active {
        border: none;
    }
`;

const OuterLinkList = () => (
  <>
            <OuterLinkListContainer title={'Why Slack?'}>
                        <InnerLink>
                            <InnerLinkItem href={'https://slack.com/intl/en-by/features'}>How it works</InnerLinkItem>
                        </InnerLink>
                        <InnerLink>
                            <InnerLinkItem href={'https://slack.com/intl/en-by/security'}>Security</InnerLinkItem>
                        </InnerLink>
                        <InnerLink>
                            <InnerLinkItem href={'https://slack.com/intl/en-by/customer-stories'}>Customers</InnerLinkItem>
                        </InnerLink>
            </OuterLinkListContainer>
            <OuterLinkListContainer title={'Solutions'}>
                        <InnerLink>
                            <InnerLinkItem href={'https://slack.com/intl/en-by/solutions/engineering'}>Engineering</InnerLinkItem>
                        </InnerLink>
                        <InnerLink>
                            <InnerLinkItem href={'https://slack.com/intl/en-by/solutions/financial-services'}>Financial Services</InnerLinkItem>
                        </InnerLink>
                        <InnerLink>
                            <InnerLinkItem href={'https://slack.com/intl/en-by/solutions/sales'}>Sales</InnerLinkItem>
                        </InnerLink>
                        <InnerLink>
                            <InnerLinkItem href={'https://slack.com/intl/en-by/solutions/information-technology'}>IT</InnerLinkItem>
                        </InnerLink>
                        <InnerLink>
                            <InnerLinkItem href={'https://slack.com/intl/en-by/solutions/marketing'}>Marketing</InnerLinkItem>
                        </InnerLink>
                        <InnerLink>
                            <InnerLinkItem href={'https://slack.com/intl/en-by/solutions/customer-support'}>Customer Support</InnerLinkItem>
                        </InnerLink>
                        <InnerLink>
                            <InnerLinkItem href={'https://slack.com/intl/en-by/solutions/human-resources'}>Human Resources</InnerLinkItem>
                        </InnerLink>
                        <InnerLink>
                            <InnerLinkItem href={'https://slack.com/intl/en-by/solutions/project-management'}>Project Management</InnerLinkItem>
                        </InnerLink>
                        <InnerLink>
                            <InnerLinkItem href={'https://slack.com/intl/en-by/solutions/media'}>Media</InnerLinkItem>
                        </InnerLink>
            </OuterLinkListContainer>
            <OuterLinkListContainer title={'Resourses'}>
                        <InnerLink>
                            <InnerLinkItem href={'https://slack.com/intl/en-by/events/webinars'}>Webinars</InnerLinkItem>
                        </InnerLink>
                        <InnerLink>
                            <InnerLinkItem href={'https://www.slackcertified.com/'}>Slack Certified Program</InnerLinkItem>
                        </InnerLink>
                        <InnerLink>
                            <InnerLinkItem href={'https://slack.com/intl/en-by/help'}>Help Center</InnerLinkItem>
                        </InnerLink>
                        <InnerLink>
                            <InnerLinkItem href={'https://api.slack.com/'}>API</InnerLinkItem>
                        </InnerLink>
                        <InnerLink>
                            <InnerLinkItem href={'https://slack.com/intl/en-by/apps'}>App Directory</InnerLinkItem>
                        </InnerLink>
                        <InnerLink>
                            <InnerLinkItem href={'https://slack.com/intl/en-by/downloads/windows'}>Download</InnerLinkItem>
                        </InnerLink>
            </OuterLinkListContainer>
  </>
);
export default OuterLinkList;
