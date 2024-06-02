import * as React from 'react';

import { MainLayout } from '@/components/Layouts/main/main-layout';

export interface IpageProps {
}

export default function Movies(props: IpageProps) {
    return (
        <MainLayout bannerTitle='movie' banner='main' bannerBg='/assets/banner02.jpg'>
            movie page
        </MainLayout>
    );
}
