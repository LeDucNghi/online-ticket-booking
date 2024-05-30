import * as React from 'react';

import { MainLayout } from '@/components/Layouts/main/main-layout';

export interface ISeatPlanProps {
}

export default function SeatPlan(props: ISeatPlanProps) {
    return (
        <MainLayout type='plan' bannerBg="/assets/banner02.jpg">
            booking movie seat page
        </MainLayout>
    );
}
