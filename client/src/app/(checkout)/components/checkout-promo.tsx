"use client"

import * as React from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';

import { InputField } from '@/components/common/input-field/input-field';

export interface ICheckoutPromoProps {
}

type Inputs = {
    promotionCode: string
}

export default function CheckoutPromo(props: ICheckoutPromoProps) {
    const {
        handleSubmit,
        control,
        formState: { isSubmitting },
    } = useForm<Inputs>({
        defaultValues: {
            promotionCode: ""
        }
    })

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputField
                name='promotionCode'
                control={control}
                label="Please enter promo code"
                type='text'
            />
        </form>
    );
}
