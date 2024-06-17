"use client"

import * as React from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';

import { InputField } from '@/components/common/input-field/input-field';

export interface ICheckoutInfoFormProps {
}

type Inputs = {
    email: string
    fullname: string
    phone: string
}

export function CheckoutContactForm(props: ICheckoutInfoFormProps) {
    const {
        handleSubmit,
        control,
        formState: { isSubmitting },
    } = useForm<Inputs>({
        defaultValues: {
            email: "",
            fullname: "",
            phone: ""
        }
    })

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <form className='w-full flex justify-between flex-wrap' onSubmit={handleSubmit(onSubmit)}>
            <InputField
                name='email'
                control={control}
                label="Full Name"
                type='text'
                style={{ width: "48%" }}
            />

            <InputField
                name='fullname'
                control={control}
                label="Enter your Email"
                type='email'
                style={{ width: "48%" }}
            />

            <InputField
                name='phone'
                control={control}
                label="Enter Your Phone Number"
                type='text'
                style={{ width: "48%", marginTop: "1rem" }}
            />
        </form>
    );
}
