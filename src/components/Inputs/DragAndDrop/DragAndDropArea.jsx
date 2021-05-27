import React from 'react';
import PropTypes from 'prop-types';
import config from './config';
import { StyledDropZone, StyledDropZoneFill } from './styles';

const DragAndDropArea = ({ drag, onDrop, imgSrc, ...props }) =>
    drag ? (
        <StyledDropZoneFill onDrop={onDrop} {...props}>
            {config.dropFileText}
        </StyledDropZoneFill>
    ) : (
        <StyledDropZone imgSrc={imgSrc} {...props}>
            {config.dragFileText}
        </StyledDropZone>
    );

DragAndDropArea.defaultProps = {
    imgSrc: '',
};

DragAndDropArea.propTypes = {
    drag: PropTypes.bool.isRequired,
    onDrop: PropTypes.func.isRequired,
    imgSrc: PropTypes.string,
};

export default DragAndDropArea;
