import * as React from 'react';

import { MainLayout } from '@/components/Layouts/main/main-layout';

export interface IMovieProps {
    params: {
        id: string
    }
}

export default function MovieItemPage({ params: { id } }: IMovieProps) {
    console.log("🚀 ~ MovieItemPage ~ id:", id)
    return (
        <MainLayout bannerBg='/assets/banner02.jpg'>
            movie item page
        </MainLayout>
    );
}
