import { css } from 'styled-components';
import colors from '../../../../../themes/colors';

export const ImageSwitchStyles = css`
    display: block;
    border: 1px solid ${colors.black};
    padding: 5px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: ${(props) => (props.isMark ? colors.black : colors.white)}
    
    &:hover {
        cursor: pointer;
    }
`;
