import "../checkout/page.scss"

import * as React from 'react';

import { CheckoutContactForm } from "./checkout-contact-form";
import CheckoutPaymentForm from "./checkout-payment-form";
import CheckoutPromo from "./checkout-promo";
import { IconButton } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import WrapperWidgets from '@/widgets/wrapper/wrapper-widget';

export interface ICheckoutInfoProps {
}

export default function CheckoutInfo(props: ICheckoutInfoProps) {
    return (
        <div className="checkout-info checkout-child">
            <WrapperWidgets
                style={{ marginBottom: "1.875rem" }}
                title="Already a Boleto Member?"
            >
                <div className="flex justify-between items-center">
                    <p className="text-gray-300 text-lg">Sign in to earn points and make booking easier!</p>

                    <IconButton className="text-white button" >
                        <PersonIcon />

                        Sign In
                    </IconButton>
                </div>
            </WrapperWidgets>

            <WrapperWidgets
                style={{ marginBottom: "1.875rem" }}
                title="Share your Contact Details"
            >
                <CheckoutContactForm />
            </WrapperWidgets>

            <WrapperWidgets
                style={{ marginBottom: "1.875rem" }}
                title="Promo Code"
            >
                <CheckoutPromo />
            </WrapperWidgets>

            <WrapperWidgets
                title="Payment Option"
            >
                <CheckoutPaymentForm />
            </WrapperWidgets>
        </div>
    );
}
