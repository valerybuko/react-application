import React from 'react';
import styled from 'styled-components';
import { ReactComponent as BottomPointerSVG } from '../../svg/bottomPointer.svg';
import { ReactComponent as RightPointerSVG } from '../../svg/rightPointer.svg';

const NextPointerWrapper = styled.div`
    text-decoration: none;
    width: 25px;
`;

const NextPointer = (props) => (
        <NextPointerWrapper>
            {
                props.pointerState ? <BottomPointerSVG/> : <RightPointerSVG/>
            }
        </NextPointerWrapper>
);

export default NextPointer;
