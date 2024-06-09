import "./wrapper.scss";

import * as React from 'react';

import { Paper } from '@mui/material';

export interface IWrapperWidgetsProps {
  elevation?: number

  title: string

  children: React.ReactNode
  style?: React.CSSProperties
}

export default function WrapperWidgets({ elevation, children, title, style }: IWrapperWidgetsProps) {
  return (
    <Paper style={style} elevation={elevation ? elevation : 5} className='wrapper'>
      <div className="wrapper-content">
        <div className="wrapper-title">
          <h5 className='text-[1.5rem] text-white font-semibold'> {title} </h5>
        </div>

        <div className="wrapper-body">
          {children}
        </div>
      </div>
    </Paper>
  );
}
