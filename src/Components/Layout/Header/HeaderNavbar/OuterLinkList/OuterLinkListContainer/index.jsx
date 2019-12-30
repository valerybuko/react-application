import React, { useState } from 'react';
import styled from 'styled-components';
import { OuterLinkListStyles } from '../style';

const OuterLinkListComponent = styled.li`${OuterLinkListStyles}`;

const OuterLinkListContainer = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleMouseEnter = () => {
    setIsVisible(true);
  };
  return (
          <OuterLinkListComponent onMouseEnter={handleMouseEnter}>
            {
              (isVisible) ? props.children : null
            }
          </OuterLinkListComponent>
  );
};

export default OuterLinkListContainer;
