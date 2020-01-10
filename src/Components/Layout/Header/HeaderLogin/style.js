import { css } from 'styled-components';

export const HeaderLoginComponentStyles = css`
   flex: 2 1 250px;
   display: flex;
   flex-flow: row nowrap;
   justify-content: flex-end; 
   align-items: center;
   padding-right: 100px;
   
   @media (max-width: 1065px) {
        padding-right: 50px;  
   } 
`;
