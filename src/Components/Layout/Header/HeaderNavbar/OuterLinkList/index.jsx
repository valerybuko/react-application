import React, { useState } from 'react';
import styled from 'styled-components';
import { OuterLinkListStyles } from './style';
import InnerLinkList from './InnerLinkList';
import InnerLink from './InnerLinkList/InnerLink';
import LinkItem from '../../../../LinkItem';

const OuterLinkListComponent = styled.li`${OuterLinkListStyles}`;

const OuterLinkList = () => {
  const [displayValue, setDisplayValue] = useState('none');
  const handleMouseEnter = () => {
    setDisplayValue('block');
  };
  const handleMouseLeave = () => {
    setDisplayValue('none');
  };
  return (
    <>
            <OuterLinkListComponent onMouseEnter={handleMouseEnter}>
                <LinkItem>
                    Why Slack
                    <InnerLinkList displayValue={displayValue} onMouseLeave={handleMouseLeave}>
                        <InnerLink>
                            <LinkItem href={'https://slack.com/intl/en-by/features'}>How it works</LinkItem>
                        </InnerLink>
                        <InnerLink>
                            <LinkItem href={'https://slack.com/intl/en-by/security'}>Security</LinkItem>
                        </InnerLink>
                        <InnerLink>
                            <LinkItem href={'https://slack.com/intl/en-by/customer-stories'}>Customers</LinkItem>
                        </InnerLink>
                    </InnerLinkList>
                </LinkItem>
            </OuterLinkListComponent>
            <OuterLinkListComponent onMouseEnter={handleMouseEnter}>
                <LinkItem>
                    Solutions
                    <InnerLinkList displayValue={displayValue} onMouseLeave={handleMouseLeave}>
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
                    </InnerLinkList>
                </LinkItem>
            </OuterLinkListComponent>
            <OuterLinkListComponent onMouseEnter={handleMouseEnter}>
                <LinkItem>
                    Resourses
                    <InnerLinkList displayValue={displayValue} onMouseLeave={handleMouseLeave}>
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
                    </InnerLinkList>
                </LinkItem>
            </OuterLinkListComponent>
    </>
  );
};

export default OuterLinkList;
