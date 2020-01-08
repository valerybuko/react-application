import { css } from 'styled-components';
import { defaultFonts } from '../../../../themes/fonts';
import colors from '../../../../themes/colors';

export const AdditionalInfoStyles = css`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    font-size: ${defaultFonts.footerFontSize}
    background-color: ${colors.whiteSmoke}
    
    @media (max-width: 750px) {
        flex-direction: column;
        align-items: center;
    }
`;
