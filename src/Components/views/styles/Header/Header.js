import { css } from 'styled-components';
import colors from '../../../../themes/colors';

export const HeaderStyles = css`
   display: flex;
   flex-flow: row wrap;
   justify-content: space-between;
   align-items: center;
   background-color: ${colors.darkred};
   border: 1px solid red;
`;
