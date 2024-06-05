import * as React from 'react';

import CustomStepper from '@/components/common/stepper/custom-stepper';
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
            <CustomStepper
                step1={
                    <div>step 1</div>
                }

                step2={
                    <div>step 2</div>
                }

                step3={
                    <div>step 3</div>
                }
            />
        </MainLayout>
    );
}
