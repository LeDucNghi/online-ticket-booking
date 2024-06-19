import "./input-field.scss"

import * as React from 'react';

import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';

export type IInputFieldProps<T extends FieldValues> =
    TextFieldProps & {
        name: Path<T>
        control: Control<T>
        style?: React.CSSProperties

        variant?: "filled" | "outlined" | "standard"
        type: "email" | "text" | "password"

        label: string
        className?: string
        placeholder?: string

        autoFocus?: boolean
        fullWidth?: boolean
    }

export function InputField<T extends FieldValues>(
    {
        name,
        label,
        control,
        variant,
        className,
        type,
        style,
        autoFocus,
        fullWidth,
        placeholder
    }: IInputFieldProps<T>) {
    return (
        <Controller
            control={control}
            name={name}
            render={(
                { field: { onChange, onBlur, value, ref },
                    fieldState: { error } }) => {
                return (
                    <TextField
                        id="standard-basic"
                        fullWidth={fullWidth}
                        autoFocus={autoFocus}
                        style={style}
                        color='success'
                        className={className}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        label={label}
                        type={type}
                        placeholder={placeholder}
                        variant={variant ? variant : "standard"}
                        autoComplete='off'
                        error={!!error}
                        helperText={error ? error.message : null}
                        inputRef={ref}

                    />
                )
            }}
        />

    );
}

