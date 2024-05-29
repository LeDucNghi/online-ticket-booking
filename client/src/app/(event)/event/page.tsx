import * as React from 'react';

import { MainLayout } from '@/components/Layouts/main/main-layout';

export interface IEventProps {
}

export default function Event(props: IEventProps) {
    return (
        <MainLayout bannerBg='/assets/banner02.jpg'>
            event page
        </MainLayout>
    );
}
