import * as React from 'react';

import { MainLayout } from '@/components/Layouts/main/main-layout';

export interface ICheckoutPageProps {
}

export default function CheckoutPage(props: ICheckoutPageProps) {
    return (
        <MainLayout
            bannerTitle='venus'
            bannerSubtitle='City Walk English - 2D'
            banner='plan'
            bannerBg="/assets/banner02.jpg"
        >
            checkout page
        </MainLayout>
    );
}
