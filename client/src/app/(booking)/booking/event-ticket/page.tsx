import * as React from 'react';

import { MainLayout } from '@/components/Layouts/main/main-layout';

export interface IEventTicketProps {
}

export default function EventTicket(props: IEventTicketProps) {
    return (
        <MainLayout type='plan' bannerBg="/assets/banner02.jpg">
            booking event ticket page
        </MainLayout>
    );
}
