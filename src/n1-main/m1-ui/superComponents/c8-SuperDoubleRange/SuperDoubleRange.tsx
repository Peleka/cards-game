import React, {ChangeEvent} from "react";
import {Slider} from "@material-ui/core";


type SuperDoubleRangePropsType = {
    onChangeRange?:  (event: ChangeEvent<{}>, value: number | number[]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    return (
        <>
            <Slider
                style={{margin: '0', height: '20px'}}
                value={value}
                onChange={onChangeRange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                name='cards count'
                min={0}
                max={20}
            />
        </>
    );
}

export default SuperDoubleRange;
