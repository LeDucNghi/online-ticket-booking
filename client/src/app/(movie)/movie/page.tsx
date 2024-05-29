import * as React from 'react';

import { Banner } from '@/components/banner/banner';
import { MainLayout } from '@/components/Layouts/main/main-layout';

export interface IpageProps {
}

export default function Movies(props: IpageProps) {
    return (
        <MainLayout bannerBg='/assets/banner02.jpg'>
            movie page
        </MainLayout>
    );
}
