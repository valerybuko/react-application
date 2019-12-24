import { css } from 'styled-components';
import colors from '../../themes/colors';

export const ContainerStyles = css`
    width: 300px;
    height: 270px;
    background-color: ${colors.gray};
    border: 1px solid red;
    
    &:hover {
        width: 310px;
        height: 280px;
    }
`;
