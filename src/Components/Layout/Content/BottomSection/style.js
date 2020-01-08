import { css } from 'styled-components';

export const BottomSectionStyles = css`
    max-width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    
    @media (max-width: 730px) {
        width: auto;
    }
`;
