import * as React from 'react';

import { MainLayout } from '@/components/Layouts/main/main-layout';

export interface IMovieSeatPlanProps {
    params: {
        id: string
    }
}

export default function MovieSeatPlan({ params: { id } }: IMovieSeatPlanProps) {
    return (
        <MainLayout
            bannerTitle='venus'
            bannerSubtitle='ENGLISH, HINDI, TELEGU, TAMIL'
            banner='plan'
            bannerBg='/assets/banner02.jpg'
        >
            movie item seat plan
        </MainLayout>
    );
}
