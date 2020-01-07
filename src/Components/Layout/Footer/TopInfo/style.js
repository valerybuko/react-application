import { css } from 'styled-components';

export const TopInfoStyles = css`
    display: flex;
    flex-flow: row nowrap;
    border: 1px solid darkblue;
    
    @media (max-width: 1005px) {
        flex-direction: column
    }
`;
