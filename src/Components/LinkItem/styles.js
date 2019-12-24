import { css } from 'styled-components';
import colors from '../../themes/colors';

export const LinkStyles = css`
    color: ${colors.black};
    text-decoration: none;
    display: inline-block;
    margin: 5px;
    padding-left: 15px;
    padding-right: 15px;
     
    &:hover {
        color: ${colors.white};
        text-decoration: underline; 
        cursor: pointer;
    }
    
    &:active {
        border: 2px dotted ${colors.lilac};
        padding: 15px;
        text-decoration: none;
    }
`;
