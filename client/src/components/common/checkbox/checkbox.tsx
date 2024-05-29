import "./checkbox.scss"

import * as React from 'react';

import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';

export interface ICustomCheckboxProps {
    placement: "end" | "top" | "bottom" | "start"

    label: string

    style?: React.CSSProperties
    color?: string
}

export function CustomCheckbox({ placement, label, style, color }: ICustomCheckboxProps) {
    return (
        <FormControlLabel
            style={style}
            value="end"
            control={<Checkbox sx={{
                ...style,
                color: color,
                '&.Mui-checked': {
                    color: color,
                },
            }} />}
            label={label}
            labelPlacement={placement ? placement : "end"}

        />
    );
}
