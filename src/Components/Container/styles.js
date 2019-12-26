import { css } from 'styled-components';
import colors from '../../themes/colors';

export const ContainerStyles = css`
    width: 300px;
    height: 270px;
    background-color: ${colors.gray};
    
    &:hover {
        width: 320px;
        height: 280px;
    }
`;
