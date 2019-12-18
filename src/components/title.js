import React from 'react';

const Title = (props) => {
    return (
        <h2 className={props.class}>{props.title}</h2>
    );
};

export default Title;