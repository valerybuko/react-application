import { css } from 'styled-components';
import colors from '../../../../../themes/colors';

export const ImageSwitchStyles = css`
    display: block;
    border: 1px solid ${colors.whiteSmoke};
    padding: 7px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: ${(props) => (props.isMark ? colors.lilac : colors.lightlyGray)}
    
    &:hover {
        cursor: pointer;
    }
`;
