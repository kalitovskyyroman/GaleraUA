import React from 'react';
import PropTypes from 'prop-types';
import { StyledNoItems, StyledSkeletonBlock } from './styles';
import config from './config';

const List = ({ items, skeleton }) => (
    <>
        {items ? (
            items.length === 0 ? (
                <StyledNoItems>
                    <h1>{config.text}</h1>
                </StyledNoItems>
            ) : (
                items.map(item => <React.Fragment key={item.key}>{item}</React.Fragment>)
            )
        ) : (
            <StyledSkeletonBlock>
                {[...Array(10)].map((e, i) => (
                    <React.Fragment key={i}>{skeleton}</React.Fragment>
                ))}
            </StyledSkeletonBlock>
        )}
    </>
);

List.propTypes = { items: PropTypes.array.isRequired, skeleton: PropTypes.node.isRequired };

export default List;
