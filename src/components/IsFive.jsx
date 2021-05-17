import React from 'react';

let renderCount = 0;

export default function  IsFive({value}) {
    console.warn(`isFive render: ${++renderCount}`);

    const getResult = () => {
        let i = 0;
        while (i < 60000000) i++;
        return value === 5 ? ` Это пять :D` : `Это не пять :(`;
    };

    return (
        <h3>{getResult()}</h3>
    )
};