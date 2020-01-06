import { css } from 'styled-components';
import colors from '../../../themes/colors';

export const HeaderStyles = css`
    width: 100%;
    flex: 0 0 5em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    background-color: ${colors.whiteDarker};
    border: 1px solid darkblue;
`;
