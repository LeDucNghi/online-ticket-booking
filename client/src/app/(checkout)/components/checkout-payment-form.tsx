"use client"

import * as React from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { images, paymentMethods } from '@/constants';

import { Button } from '@mui/material';
import Image from 'next/image';
import { InputField } from '@/components/common/input-field/input-field';
import Link from 'next/link';

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
        <div className="checkout-payment">
            <form className='' onSubmit={handleSubmit(onSubmit)}>
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

                <div className="flex justify-between flex-wrap mt-[2rem]">
                    <h6 className="subtitle">
                        enter your card details
                    </h6>

                    <InputField
                        name='cardDetail'
                        control={control}
                        label="Card Details"
                        type='text'
                        variant='outlined'
                        style={{ margin: "1rem 0" }}
                        fullWidth
                    />

                    <InputField
                        name='cardName'
                        control={control}
                        label="Name on the Card"
                        type='email'
                        variant='outlined'
                        style={{ margin: "1rem 0" }}
                        fullWidth
                    />

                    <InputField
                        name='cardExpiration'
                        control={control}
                        label="Expiration"
                        type='text'
                        variant='outlined'
                        style={{ margin: "1rem 0", width: "48%" }}
                        placeholder='MM/YY'
                    />

                    <InputField
                        name='cardCVV'
                        control={control}
                        label="CVV"
                        type='text'
                        variant='outlined'
                        placeholder='CVV'
                        style={{ margin: "1rem 0", width: "48%" }}
                    />
                </div>

                <div className="my-[0.875rem]">
                    <Button className='button uppercase text-white font-bold' >
                        make payment
                    </Button>
                </div>
            </form>

            <p className="notice">
                By Clicking &quot;Make Payment&quot; you agree to the
                &nbsp;<Link href="/terms">
                    Terms and conditions
                </Link>
            </p>
        </div>
    );
}
