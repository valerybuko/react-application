import { css } from 'styled-components';
import colors from '../../../../themes/colors';

export const Section1Styles = css`
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     background-color: ${colors.gray};
     padding: 30px;
     
     @media (max-width: 480px) {
        align-items: center;
     }
`;
