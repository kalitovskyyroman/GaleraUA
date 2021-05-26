import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledDropZone, StyledDropZoneFill, StyledInput } from './styles';
import config from './config';

const DragAndDrop = ({ fieldName, register, setValue, fileType }) => {
    const [drag, setDrag] = useState(false);
    const [imgPreview, setImgPreview] = useState(null);

    function dragStartHandler(e) {
        e.preventDefault();
        setDrag(true);
    }

    function dragLeaveHandler(e) {
        e.preventDefault();
        setDrag(false);
    }

    const setImage = files => {
        setValue(fieldName, files);
        setImgPreview(URL.createObjectURL(files[0]));
    };

    function onDropHandler(e) {
        e.preventDefault();
        setDrag(false);
        e.dataTransfer.files[0].type.startsWith(`${fileType}/`)
            ? setImage(e.dataTransfer.files)
            : setValue(fieldName, null);
    }

    function onInputHandle(e) {
        e.preventDefault();
        e.target.files[0] ? setImage(e.target.files) : setValue(fieldName, null);
    }

    return (
        <>
            <StyledInput
                type='file'
                onInput={e => onInputHandle(e)}
                accept={`${fileType}/*`}
                {...register(fieldName)}
                id='upload'
            />
            {drag ? (
                <StyledDropZoneFill
                    onDragStart={e => dragStartHandler(e)}
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDragOver={e => dragStartHandler(e)}
                    htmlFor='upload'
                    onDrop={e => onDropHandler(e)}
                >
                    {config.dropFileText}
                </StyledDropZoneFill>
            ) : (
                <StyledDropZone
                    onDragStart={e => dragStartHandler(e)}
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDragOver={e => dragStartHandler(e)}
                    imgSrc={imgPreview}
                    htmlFor='upload'
                >
                    {config.dragFileText}
                </StyledDropZone>
            )}
        </>
    );
};

DragAndDrop.propTypes = {
    fieldName: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
    fileType: PropTypes.string.isRequired,
};

export default DragAndDrop;
