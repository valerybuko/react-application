import { css } from 'styled-components';
import { defaultFonts } from '../../../../themes/fonts';

export const AdditionalInfoStyles = css`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    font-size: ${defaultFonts.footerFontSize}
    padding: 0 100px;
    
    @media (max-width: 1065px) {
        padding-left: 50px;  
    }
    
    @media (max-width: 750px) {
        flex-direction: column;
        align-items: center;
    }
`;
