import * as React from "react";

import { Control, Controller, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
} from "@chakra-ui/react";

export type IInputFieldProps<T extends FieldValues> = InputProps & {
  name: Path<T>;
  control: Control<T>;
  style?: React.CSSProperties;

  variant?: "filled" | "outlined" | "standard";
  type: "email" | "text" | "password";

  label: string;
  className?: string;
  placeholder?: string;

  autoFocus?: boolean;
  fullWidth?: boolean;
};

export default function InputField<T extends FieldValues>({
  label,
  name,
  control,
  className,
  placeholder,
  type,
}: IInputFieldProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => {
        return (
          <FormControl className={className}>
            <FormLabel htmlFor={name}> {label} </FormLabel>
            <Input
              id={name}
              placeholder={placeholder}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              type={type}
            />
            <FormErrorMessage>{error?.message}</FormErrorMessage>
          </FormControl>
        );
      }}
    />
  );
}
