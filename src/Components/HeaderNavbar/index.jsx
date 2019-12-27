import React from 'react';
// eslint-disable-next-line import/no-unresolved
import LinkItem from '../LinkItem';
// eslint-disable-next-line import/no-unresolved
import InnerLinkList from './InnerLinkList';
// eslint-disable-next-line import/no-unresolved
import OuterLinkList from './OuterLinkList';
import InnerLink from './InnerLinkList/InnerLink';

const HeaderNavbar = () => (
  <>
        <OuterLinkList>
            <LinkItem>
                Why Slack
                <InnerLinkList>
                    <InnerLink><LinkItem href={'https://slack.com/intl/en-by/features'}>How it
                        works</LinkItem></InnerLink>
                    <InnerLink><LinkItem href={'https://slack.com/intl/en-by/security'}>Security</LinkItem></InnerLink>
                    <InnerLink><LinkItem
                        href={'https://slack.com/intl/en-by/customer-stories'}>Customers</LinkItem></InnerLink>
                </InnerLinkList>
            </LinkItem>
        </OuterLinkList>
        <OuterLinkList>
            <LinkItem>
                Solutions
                <InnerLinkList>
                    <InnerLink><LinkItem
                        href={'https://slack.com/intl/en-by/solutions/engineering'}>Engineering</LinkItem></InnerLink>
                    <InnerLink><LinkItem href={'https://slack.com/intl/en-by/solutions/financial-services'}>Financial
                        Services</LinkItem></InnerLink>
                    <InnerLink><LinkItem
                        href={'https://slack.com/intl/en-by/solutions/sales'}>Sales</LinkItem></InnerLink>
                    <InnerLink><LinkItem
                        href={'https://slack.com/intl/en-by/solutions/information-technology'}>IT</LinkItem></InnerLink>
                    <InnerLink><LinkItem
                        href={'https://slack.com/intl/en-by/solutions/marketing'}>Marketing</LinkItem></InnerLink>
                    <InnerLink><LinkItem href={'https://slack.com/intl/en-by/solutions/customer-support'}>Customer
                        Support</LinkItem></InnerLink>
                    <InnerLink><LinkItem href={'https://slack.com/intl/en-by/solutions/human-resources'}>Human
                        Resources</LinkItem></InnerLink>
                    <InnerLink><LinkItem href={'https://slack.com/intl/en-by/solutions/project-management'}>Project
                        Management</LinkItem></InnerLink>
                    <InnerLink><LinkItem
                        href={'https://slack.com/intl/en-by/solutions/media'}>Media</LinkItem></InnerLink>
                </InnerLinkList>
            </LinkItem>
        </OuterLinkList>
        <OuterLinkList>
            <LinkItem>
                Resourses
                <InnerLinkList>
                    <InnerLink><LinkItem
                        href={'https://slack.com/intl/en-by/events/webinars'}>Webinars</LinkItem></InnerLink>
                    <InnerLink><LinkItem href={'https://www.slackcertified.com/'}>Slack Certified
                        Program</LinkItem></InnerLink>
                    <InnerLink><LinkItem href={'https://slack.com/intl/en-by/help'}>Help Center</LinkItem></InnerLink>
                    <InnerLink><LinkItem href={'https://api.slack.com/'}>API</LinkItem></InnerLink>
                    <InnerLink><LinkItem href={'https://slack.com/intl/en-by/apps'}>App Directory</LinkItem></InnerLink>
                    <InnerLink><LinkItem
                        href={'https://slack.com/intl/en-by/downloads/windows'}>Download</LinkItem></InnerLink>
                </InnerLinkList>
            </LinkItem>
        </OuterLinkList>
        <LinkItem href={'https://slack.com/intl/en-by/enterprise'}>Enterprise</LinkItem>
        <LinkItem href={'https://slack.com/intl/en-by/pricing'}>Pricing</LinkItem>
  </>
);

export default HeaderNavbar;
