import { css } from 'styled-components';
import { defaultFonts } from '../../themes/fonts';

export const LayoutStyles = css`
    display: flex;
    flex-direction: column;
    min-height: 100vh; 
    margin: 0;
    padding: 0;
    font-size: ${defaultFonts.bodyFontSize};
`;
