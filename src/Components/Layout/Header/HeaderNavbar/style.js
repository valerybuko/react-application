import { css } from 'styled-components';
import { defaultFonts } from '../../../../themes/fonts';

export const HeaderNavbarStyles = css`
    display: flex;
    align-items: center;
    flex: 6 1 600px;
    font-weight: ${defaultFonts.fontWeightRegular} 
    border: 1px solid darkblue;
`;
