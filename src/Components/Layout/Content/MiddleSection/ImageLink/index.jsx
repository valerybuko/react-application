import React from 'react';
import styled from 'styled-components';
import { ImageLinkStyles } from './style';
import Title from '../../../../Title';
import colors from '../../../../../themes/colors';

const BLOCK_SIGN = 'Blog';
const READ_SIGN = 'READ STORY';

const ImageLinkWrapper = styled.a`
    ${ImageLinkStyles}
    display: ${(props) => (props.isHide ? 'none' : 'flex')}
    flex-direction: column;
    justify-content: space-between;
    min-height: 444px;
    
     &:hover {
        cursor: pointer;
        width: 300px;
        min-height: 500px;
        padding-left: 10px;
    }
`;

const InnerLinkImageWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
`;

const ReadTitle = styled(Title)`
    color: ${colors.darkblue_experssed}
`;

const BlockTitle = styled(Title)`
    margin-bottom: 15px;
`;

const TitleArror = styled(Title)`
    color: ${colors.darkblue_experssed}
`;

const ImageSection = styled.img`
    margin-bottom: 25px;
    width: 100%;
    height: 195px;
`;

const ImageLink = ({ imgSRC, text, url, ...props }) => (
        <ImageLinkWrapper href={url} {...props}>
            <ImageSection src={imgSRC} alt="image" />
            <BlockTitle fontSize={'14px'}>{BLOCK_SIGN}</BlockTitle>
            <Title fontSize={'24px'}>{text}</Title>
            <InnerLinkImageWrapper>
                <ReadTitle fontSize={'14px'}>{READ_SIGN}</ReadTitle>
                <TitleArror fontSize={'14px'}>&rarr;</TitleArror>
            </InnerLinkImageWrapper>
        </ImageLinkWrapper>
);

export default ImageLink;
