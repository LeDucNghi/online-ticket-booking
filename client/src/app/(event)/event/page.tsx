import * as React from 'react';

import { MainLayout } from '@/components/Layouts/main/main-layout';

export interface IEventProps {
}

export default function Events(props: IEventProps) {
    return (
        <MainLayout
            bannerTitle='events'
            banner='main'
            bannerBg='/assets/banner02.jpg'
        >
            event page
        </MainLayout>
    );
}
