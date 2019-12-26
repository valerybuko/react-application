import { css } from 'styled-components';

export const ButtonWrapperStyles = css`
   display: flex;
   flex-flow: row wrap;
   justify-content: center;
   
   @media (max-width: 480px) {
        display: flex; 
        flex-direction: column;
   }
`;
