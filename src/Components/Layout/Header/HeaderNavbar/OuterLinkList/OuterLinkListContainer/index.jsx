import React, { useState } from 'react';
import styled from 'styled-components';
import { OuterLinkListStyles } from '../style';

const OuterLinkListComponent = styled.li`${OuterLinkListStyles}`;

const OuterLinkListContainer = (props) => {
  const [displayValue, setDisplayValue] = useState('none');
  const handleMouseEnter = () => {
    setDisplayValue('block');
  };
  return (
          <OuterLinkListComponent onMouseEnter={handleMouseEnter}>
              {props.children}
          </OuterLinkListComponent>
  );
};

export default OuterLinkListContainer;
