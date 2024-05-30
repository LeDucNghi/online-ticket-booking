import "./main-layout.scss";

import * as React from 'react';

import { Banner } from "@/components/common/banner/banner";

export interface IMainLayoutProps {
  children: React.ReactNode

  bannerBg: string

  type: "main" | "plan"
}

export function MainLayout({ children, bannerBg, type }: IMainLayoutProps) {
  return (
    <>
      <Banner type={type} bannerBg={bannerBg} />

      <div className='relative top-full pt-[6.25rem]'
        style={{ backgroundColor: "#001232" }}
      >
        {children}
      </div>
    </>
  );
}
