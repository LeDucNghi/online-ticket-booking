import "./main-layout.scss";

import * as React from 'react';

import { Banner } from "@/components/banner/banner";

export interface IMainLayoutProps {
  children: React.ReactNode

  bannerBg: string
}

export function MainLayout({ children, bannerBg }: IMainLayoutProps) {
  return (
    <>
      <Banner bannerBg={bannerBg} />

      <div className='relative top-full pt-[6.25rem]'
        style={{ backgroundColor: "#001232" }}
      >
        {children}
      </div>
    </>
  );
}
