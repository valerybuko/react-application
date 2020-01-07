import { css } from 'styled-components';
import { defaultFonts } from '../../../../../themes/fonts';

export const FooterLinkListContainerStyles = css`
    flex: 3;
    display: flex;
    justify-content: center;
    padding: 10px;
    font-size: ${defaultFonts.footerFontSize}
    border: 1px solid red;
    
    @media (max-width: 1005px) {
        justify-content: flex-start;
    } 
`;
