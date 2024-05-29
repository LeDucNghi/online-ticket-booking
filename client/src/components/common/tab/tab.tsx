import "./tab.scss"

import * as React from 'react';

import Paper from '@mui/material/Paper';

export interface ISearchTabProps {
  children: React.ReactNode

  style?: React.CSSProperties

  title?: string
  subtitle?: string
  className?: string
  bgUrl?: string
}

export function Tab({ children, style, className, bgUrl, title, subtitle }: ISearchTabProps) {
  return (
    <Paper style={{
      ...style,
      backgroundImage: `url(${bgUrl})`,
    }}
      className={`${className} tab-container`}
      elevation={5}
    >
      <div className="tab-header">
        <h6>{title ? title : "welcome to bolero"} </h6>
        <h3>{subtitle ? subtitle : "what are you looking for"} </h3>
      </div>

      {children}
    </Paper>
  );
}
