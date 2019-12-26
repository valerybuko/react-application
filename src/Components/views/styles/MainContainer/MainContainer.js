import { css } from 'styled-components';

export const MainContainerStyles = css`
    display: flex;
    flex-flow: column nowrap;
    width: 90%;
    height: 100%;
    margin: 0 auto;
    
    @media (max-width: 480px) {
        width: 100%;
        margin: 0;
        padding: 0 0 2em;
    }
`;
