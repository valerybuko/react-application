import { css } from 'styled-components';

export const OuterLinkListStyles = css`
    position: relative;
    list-style-type: none;
    
    &:hover>'*'{
        color: red;
    }    
`;
