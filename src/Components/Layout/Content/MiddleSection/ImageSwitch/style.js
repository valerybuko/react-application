import { css } from 'styled-components';
import colors from '../../../../../themes/colors';

export const ImageSwitchStyles = css`
    display:none;
    border: 1px solid ${colors.black};
    padding: 5px;
    margin: 0 5px;
    border-radius: 50%;
    
    &:hover {
        cursor: pointer;
    }
    
    @media (max-width: 1070px) {
        display: block;
    }
`;
