import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledDropZone, StyledDropZoneFill, StyledInput } from './styles';
import config from './config';

const DragAndDrop = ({ fieldName, register, setValue, fileType }) => {
    const [drag, setDrag] = useState(false);
    const [imgPreview, setImgPreview] = useState(null);

    const dragStartHandler = e => {
        e.preventDefault();
        setDrag(true);
    };

    const dragLeaveHandler = e => {
        e.preventDefault();
        setDrag(false);
    };

    const setImage = files => {
        setValue(fieldName, files);
        setImgPreview(URL.createObjectURL(files[0]));
    };

    const onDropHandler = e => {
        e.preventDefault();
        setDrag(false);
        e.dataTransfer.files[0].type.startsWith(`${fileType}/`)
            ? setImage(e.dataTransfer.files)
            : setValue(fieldName, null);
    };

    const onInputHandle = e => {
        e.preventDefault();
        e.target.files[0] ? setImage(e.target.files) : setValue(fieldName, null);
    };

    return (
        <>
            <StyledInput
                type='file'
                onInput={onInputHandle}
                accept={`${fileType}/*`}
                {...register(fieldName)}
                id='upload'
            />
            {drag ? (
                <StyledDropZoneFill
                    onDragStart={dragStartHandler}
                    onDragLeave={dragLeaveHandler}
                    onDragOver={dragStartHandler}
                    htmlFor='upload'
                    onDrop={onDropHandler}
                >
                    {config.dropFileText}
                </StyledDropZoneFill>
            ) : (
                <StyledDropZone
                    onDragStart={dragStartHandler}
                    onDragLeave={dragLeaveHandler}
                    onDragOver={dragStartHandler}
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
