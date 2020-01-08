import { css } from 'styled-components';
import colors from '../../themes/colors';

export const LinkStyles = css`
    color: ${colors.black};
    text-decoration: none;
    display: inline-block;
    margin: 5px;
    padding: 0 12px;
     
    &:hover {
        color: ${colors.darkblue};
        text-decoration: underline; 
        cursor: pointer;
    }
    
    &:active {
        border: 2px dotted ${colors.lilac};
        text-decoration: none;
    }
`;
