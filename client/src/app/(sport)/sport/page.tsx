import * as React from 'react';

import { MainLayout } from '@/components/Layouts/main/main-layout';

export interface ISportPageProps {
}

export default function SportPage(props: ISportPageProps) {
    return (
        <MainLayout type='main' bannerBg="/assets/banner02.jpg">
            <p>sport page</p>
        </MainLayout>
    );
}
