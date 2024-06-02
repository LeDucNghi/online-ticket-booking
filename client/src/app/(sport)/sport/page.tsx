import * as React from 'react';

import { MainLayout } from '@/components/Layouts/main/main-layout';

export interface ISportPageProps {
}

export default function SportPage(props: ISportPageProps) {
    return (
        <MainLayout
            bannerTitle='football league tournament'
            banner='main'
            bannerBg="/assets/banner02.jpg"
            bannerSubtitle='17 South Sherman Street Astoria, NY 11106'
        >
            <p>sport page</p>
        </MainLayout>
    );
}
