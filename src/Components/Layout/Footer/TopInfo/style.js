import { css } from 'styled-components';
import colors from '../../../../themes/colors';

export const TopInfoStyles = css`
    display: flex;
    flex-flow: row nowrap;
    background-color: ${colors.white}
    padding-left: 100px;
    
    @media (max-width: 1005px) {
        flex-direction: column
    }
    
    @media (max-width: 1065px) {
        padding-left: 50px;  
    }
`;
