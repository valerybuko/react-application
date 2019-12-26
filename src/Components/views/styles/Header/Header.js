import { css } from 'styled-components';
import colors from '../../../../themes/colors';

export const HeaderStyles = css`
   display: flex;
   flex-flow: row nowrap;
   justify-content: space-between;
   background-color: ${colors.darkred};
   border: 1px solid red;
`;
