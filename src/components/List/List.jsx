/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const List = ({ items, skeleton }) => {
    console.log(items);

    return (
        <>
            {items ? (
                items.length === 0 ? (
                    <h1>Empty list</h1>
                ) : (
                    items.map(item => <React.Fragment key={item.key}>{item}</React.Fragment>)
                )
            ) : (
                <div>
                    {skeleton}
                    {skeleton}
                    {skeleton}
                </div>
            )}
        </>
    );
};

export default List;
