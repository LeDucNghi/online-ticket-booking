import * as React from 'react';

import { MainLayout } from '@/components/Layouts/main/main-layout';

export interface IEventTicketProps {
}

export default function EventTicket(props: IEventTicketProps) {
    return (
        <MainLayout
            bannerTitle='digital marketing conference 2020'
            bannerSubtitle='17 South Sherman Street Astoria, NY 11106'
            banner='plan'
            bannerBg="/assets/banner02.jpg"
        >
            booking event ticket page
        </MainLayout>
    );
}
