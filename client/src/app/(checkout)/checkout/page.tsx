import * as React from 'react';

import { MainLayout } from '@/components/Layouts/main/main-layout';

export interface ICheckoutPageProps {
}

export default function CheckoutPage(props: ICheckoutPageProps) {
    return (
        <MainLayout type='plan' bannerBg="/assets/banner02.jpg">
            checkout page
        </MainLayout>
    );
}
