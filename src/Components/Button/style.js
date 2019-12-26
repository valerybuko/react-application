import { css } from 'styled-components';
import colors from '../../themes/colors';

export const ButtonStyles = css`
    box-sizing: border-box;
    min-width: 75px;
    min-height: 45px;
    padding: 15px;
    margin: 5px;
    border: 1px solid ${colors.lilac};
    border-radius: 5px;
    background-color: ${colors.lilac};
    color: ${colors.white};
    opacity: ${(props) => (props.disabled ? 0.3 : 0.9)};
    font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')}
    
    &:hover {
        opacity: ${(props) => (props.disabled ? 0.3 : 1)};
        cursor: pointer;
    }
 `;
