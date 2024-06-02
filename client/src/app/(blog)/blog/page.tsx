import * as React from 'react';

import { MainLayout } from '@/components/Layouts/main/main-layout';

export interface IBlogsProps {
}

export default function Blogs(props: IBlogsProps) {
    return (
        <MainLayout
            bannerTitle='blog'
            banner='plan'
            bannerBg='/assets/banner02.jpg'
        >
            blog page
        </MainLayout>
    );
}
