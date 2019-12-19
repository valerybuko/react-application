import {css} from "styled-components";
import colors from '../../themes/colors'

export const ButtonStyles = css`
    box-sizing: border-box;
    min-width: 75px;
    min-height: 45px;
    padding: 15px;
    margin: 15px;
    border: 1px solid ${colors.lilac};
    border-radius: 5px;
    background-color: ${colors.lilac};
    color: ${colors.white};
    opacity: ${props => (props.disabled ? 0.3 : 0.9)};
    
    &:hover {
        opacity: ${props => (props.disabled ? 0.3 : 1)};
    }
 `;
