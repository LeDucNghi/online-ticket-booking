import * as React from 'react';

import { Divider } from '@mui/material';

export interface IFilterProps {
    title: string
    isDivider?: boolean

    children: React.ReactNode
    style?: React.CSSProperties
}

export function FilterWidget({ title, isDivider, children, style }: IFilterProps) {
    return (
        <div style={style} className='p-8 bg-custom-mainColor'>
            <h6 className='text-lg uppercase text-white font-bold'>
                {title}
            </h6>

            {isDivider && <Divider sx={{ width: "100%" }} />}

            <div className="w-full flex flex-col">
                {children}
            </div>
        </div>
    );
}
