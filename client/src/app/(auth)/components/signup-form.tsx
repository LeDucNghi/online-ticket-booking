"use client"

import "./form.scss";

import * as React from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';

import { CustomCheckbox } from "@/components/checkbox/checkbox";
import { InputField } from "@/components/input-field/input-field";
import Link from "next/link";
import { LoadingButton } from '@mui/lab';

export interface ISignUpFormProps {
}

type Inputs = {
    email: string
    password: string
    confirmPassword: string
}

export default function SignUpForm(props: ISignUpFormProps) {
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors, isSubmitting },
    } = useForm<Inputs>({
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputField
                name="email"
                label="Enter Your Email"
                type="email"
                control={control}
                className="inputfield"
                style={{ marginTop: "1rem" }}
            />

            <InputField
                name="password"
                label="Password"
                type="password"
                control={control}
                className="inputfield"
                style={{ marginTop: "1rem" }}

            />

            <InputField
                name="confirmPassword"
                label="Confirm Your Password"
                type="password"
                control={control}
                className="inputfield"
                style={{ marginTop: "1rem" }}

            />

            <div className="form-checkgroup flex-space-center">
                <CustomCheckbox
                    placement="end"
                    label="I Agree To The Terms, Privacy Policy And Fees"
                    color="#6d7bba"
                />
            </div>

            <div className="form-submit flex-center w-full">
                <LoadingButton
                    className="form-button"
                    type='submit'
                    loading={isSubmitting}
                    variant="contained"
                >
                    Sign In
                </LoadingButton>
            </div>
        </form>
    );
}
