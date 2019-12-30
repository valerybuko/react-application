import React from 'react';
import InnerLinkList from './InnerLinkList';
import InnerLink from './InnerLinkList/InnerLink';
import LinkItem from '../../../../LinkItem';
import OuterLinkListContainer from './OuterLinkListContainer';

const OuterLinkList = () => (
  <>
            <OuterLinkListContainer title={'Why Slack?'}>
                        <InnerLink>
                            <LinkItem href={'https://slack.com/intl/en-by/features'}>How it works</LinkItem>
                        </InnerLink>
                        <InnerLink>
                            <LinkItem href={'https://slack.com/intl/en-by/security'}>Security</LinkItem>
                        </InnerLink>
                        <InnerLink>
                            <LinkItem href={'https://slack.com/intl/en-by/customer-stories'}>Customers</LinkItem>
                        </InnerLink>
            </OuterLinkListContainer>
            <OuterLinkListContainer title={'Solutions'}>
                        <InnerLink>
                            <LinkItem href={'https://slack.com/intl/en-by/solutions/engineering'}>Engineering</LinkItem>
                        </InnerLink>
                        <InnerLink>
                            <LinkItem href={'https://slack.com/intl/en-by/solutions/financial-services'}>Financial
                                Services</LinkItem>
                        </InnerLink>
                        <InnerLink>
                            <LinkItem
                                href={'https://slack.com/intl/en-by/solutions/sales'}>Sales</LinkItem>
                        </InnerLink>
                        <InnerLink>
                            <LinkItem
                                href={'https://slack.com/intl/en-by/solutions/information-technology'}>IT</LinkItem>
                        </InnerLink>
                        <InnerLink>
                            <LinkItem href={'https://slack.com/intl/en-by/solutions/marketing'}>Marketing</LinkItem>
                        </InnerLink>
                        <InnerLink>
                            <LinkItem href={'https://slack.com/intl/en-by/solutions/customer-support'}>Customer
                                Support</LinkItem>
                        </InnerLink>
                        <InnerLink>
                            <LinkItem href={'https://slack.com/intl/en-by/solutions/human-resources'}>Human
                                Resources</LinkItem>
                        </InnerLink>
                        <InnerLink>
                            <LinkItem href={'https://slack.com/intl/en-by/solutions/project-management'}>Project
                                Management</LinkItem>
                        </InnerLink>
                        <InnerLink>
                            <LinkItem href={'https://slack.com/intl/en-by/solutions/media'}>Media</LinkItem>
                        </InnerLink>
            </OuterLinkListContainer>
            <OuterLinkListContainer title={'Resourses'}>
                        <InnerLink>
                            <LinkItem href={'https://slack.com/intl/en-by/events/webinars'}>Webinars</LinkItem>
                        </InnerLink>
                        <InnerLink>
                            <LinkItem href={'https://www.slackcertified.com/'}>Slack Certified Program</LinkItem>
                        </InnerLink>
                        <InnerLink>
                            <LinkItem href={'https://slack.com/intl/en-by/help'}>Help Center</LinkItem>
                        </InnerLink>
                        <InnerLink>
                            <LinkItem href={'https://api.slack.com/'}>API</LinkItem>
                        </InnerLink>
                        <InnerLink>
                            <LinkItem href={'https://slack.com/intl/en-by/apps'}>App Directory</LinkItem>
                        </InnerLink>
                        <InnerLink>
                            <LinkItem href={'https://slack.com/intl/en-by/downloads/windows'}>Download</LinkItem>
                        </InnerLink>
            </OuterLinkListContainer>
  </>
);
export default OuterLinkList;
