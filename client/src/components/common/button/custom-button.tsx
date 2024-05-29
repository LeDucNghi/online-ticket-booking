import "./custom-button.scss"

import * as React from 'react';

import { Button } from '@mui/material';

export interface ICustomButtonProps {
    children: React.ReactNode
    style?: React.CSSProperties

    onClick?: (value?: any) => void

    variant?: "contained" | "outlined" | "text"

    className?: string

    active: boolean
}

export function CustomButton({ children, onClick, variant, className, style, active }: ICustomButtonProps) {
    return (
        <Button
            variant={variant}
            onClick={onClick}
            className={`custom-button ${active ? "isActive" : ""} ${className}`}
            style={style}
        >
            {children}
        </Button>
    );
}
