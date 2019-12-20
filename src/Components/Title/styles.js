import {css} from 'styled-components';
import colors from "../../themes/colors";
import fonts from "../../themes/fonts";

export const TitleStyles = css`
    font-family: ${fonts.fontFamilyDefaultTitle};
    font-size: ${props => props.fontSize || fonts.fontSize24}
    font-style: ${fonts.fontStyleNormal};
    font-weight: ${fonts.fontWeightBold};
    color: ${colors.black}
`;
