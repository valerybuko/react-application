import { css } from 'styled-components';
import { defaultFonts } from '../../../../themes/fonts';

export const HeaderNavbarStyles = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex: 6 1 600px;
    font-weight: ${defaultFonts.fontWeightRegular} 
`;
