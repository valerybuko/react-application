import { css } from 'styled-components';

export const InnerLinkListStyles = css`
    position: absolute;
    top: 10;
    right: 0;
    display: ${(props) => props.displayValue};
    background-color: white;
`;
