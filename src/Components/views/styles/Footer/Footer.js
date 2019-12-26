import { css } from 'styled-components';
import colors from '../../../../themes/colors';

export const FooterStyles = css`
    box-sizing: border-box;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    background-color: ${colors.darkred};
    padding 20px 0;
    border: 2px solid red;
`;
