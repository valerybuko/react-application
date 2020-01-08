import { css } from 'styled-components';
import { decorativeFonts, defaultFonts } from '../../themes/fonts';

export const TitleStyles = css`
    font-family: ${decorativeFonts.fontFamily};
    font-size: ${(props) => props.fontSize || defaultFonts.titleFontSize},
`;
