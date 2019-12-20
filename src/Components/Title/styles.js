import {css} from 'styled-components';
import colors from "../../themes/colors";

export const TitleStyles = css`
    font-family: "Times New Roman", Times, serif;
    font-size: ${props => props.fontSize || '24px'}
    font-style: normal;
    font-weight: bold;
    color: ${colors.black}
`;
