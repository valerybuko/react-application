import { css } from 'styled-components';
import colors from '../../../themes/colors';

export const ContentStyles = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    flex: 1 1 auto;
    margin: 0 auto;
    background-color: ${colors.whiteDarker};
    border: 1px solid green;
`;
