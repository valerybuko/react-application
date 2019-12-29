import { css } from 'styled-components';
import { defaultFonts } from '../../../themes/fonts';

export const ApplicationContentStyles = css`
    font-size: ${defaultFonts.bodyFontSize};
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh; 
`;
