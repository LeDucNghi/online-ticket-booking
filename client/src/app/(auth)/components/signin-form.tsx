"use client"

import "./form.scss";

import { SubmitHandler, useForm } from 'react-hook-form';

import { CustomCheckbox } from "@/components/checkbox/checkbox";
import { InputField } from "@/components/input-field/input-field";
import Link from "next/link";
import { LoadingButton } from '@mui/lab';

export interface ISignInFormProps {
}

type Inputs = {
    email: string
    password: string
}

export function SignInForm(props: ISignInFormProps) {
    const {
        handleSubmit,
        control,
        formState: { isSubmitting },
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
                className="inputfield"
                control={control}
                style={{ marginTop: "1rem" }}
            />

            <div className="form-checkgroup flex-space-center">
                <CustomCheckbox
                    placement="end"
                    label="remember password"
                    color="#6d7bba"
                />
                &nbsp;
                <Link href="/forget" >Forget Password</Link>
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
