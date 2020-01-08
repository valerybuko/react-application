import { css } from 'styled-components';
import { defaultFonts } from '../../../../themes/fonts';

export const AdditionalInfoStyles = css`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    font-size: ${defaultFonts.footerFontSize}
    
    @media (max-width: 750px) {
        flex-direction: column;
        align-items: center;
    }
`;
