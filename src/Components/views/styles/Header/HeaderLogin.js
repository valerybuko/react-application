import { css } from 'styled-components';

export const HeaderLoginStyles = css`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    
    @media (max-width: 480px) {
        flex-direction: column-reverse;
    }
`;
