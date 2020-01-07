import { css } from 'styled-components';

export const AdditionalInfoStyles = css`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    border: 1px solid gray;
    
    @media (max-width: 750px) {
        flex-direction: column;
        align-items: center;
    }
`;
