"use client"

import * as React from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { images, paymentMethods } from '@/constants';

import { Button } from '@mui/material';
import Image from 'next/image';
import { InputField } from '@/components/common/input-field/input-field';

export interface ICheckoutPaymentFormProps {
}



type Inputs = {
    cardDetail: string
    cardName: string
    cardExpiration: string
    cardCVV: string
}

export default function CheckoutPaymentForm(props: ICheckoutPaymentFormProps) {
    const [methods, setMethods] = React.useState(1);


    const {
        handleSubmit,
        control,
        formState: { isSubmitting },
    } = useForm<Inputs>({
        defaultValues: {
            cardDetail: "",
            cardName: "",
            cardExpiration: "",
            cardCVV: "",
        }
    })

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <form className='checkout-payment' onSubmit={handleSubmit(onSubmit)}>
            <ul>
                {paymentMethods.map((method, key) => {
                    return (
                        <li key={key} onClick={() => setMethods(method.id)} >
                            <Button
                                className={`${methods === method.id ? "active" : ""}`}
                                variant='outlined'
                            >
                                <Image src={method.img} alt='' />

                                <span className='capitalize'> {method.name} </span>
                            </Button>
                        </li>
                    )
                })}
            </ul>

            <InputField
                name='cardDetail'
                control={control}
                label="Card Details"
                type='text'
                variant='outlined'
                style={{ margin: "1rem 0" }}
            />

            <InputField
                name='cardName'
                control={control}
                label="Name on the Card"
                type='email'
                variant='outlined'
                style={{ margin: "1rem 0" }}
            />

            <InputField
                name='cardExpiration'
                control={control}
                label="Expiration"
                type='text'
                variant='outlined'
                style={{ margin: "1rem 0" }}
            />

            <InputField
                name='cardCVV'
                control={control}
                label="CVV"
                type='text'
                variant='outlined'
                style={{ margin: "1rem 0" }}
            />
        </form>
    );
}
