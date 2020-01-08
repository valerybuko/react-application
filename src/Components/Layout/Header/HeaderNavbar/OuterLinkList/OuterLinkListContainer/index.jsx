import React, { useState } from 'react';
import styled from 'styled-components';
import { OuterLinkListStyles } from '../style';
import LinkItem from '../../../../../LinkItem';
import InnerLinkList from '../InnerLinkList';

const OuterLinkListComponent = styled.li`${OuterLinkListStyles}`;

const OuterLinkListContainer = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleMouseEnter = () => {
    setIsVisible(true);
  };
  const handleMouseLeave = () => {
    setIsVisible(false);
  };
  return (
            <OuterLinkListComponent onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <LinkItem title={props.title}/>
                <InnerLinkList>
                    {
                        (isVisible) ? props.children : null
                    }
                </InnerLinkList>
            </OuterLinkListComponent>
  );
};

export default OuterLinkListContainer;
