import "./main-layout.scss";

import * as React from 'react';

import { Banner } from "@/components/common/banner/banner";

export interface IMainLayoutProps {
  children: React.ReactNode

  bannerBg: string

  banner: "main" | "plan"

  bannerChildren?: React.ReactNode

  bannerTitle: string
  bannerSubtitle?: string
}

export function MainLayout({
  children,
  bannerBg,
  banner,
  bannerChildren,
  bannerSubtitle,
  bannerTitle
}: IMainLayoutProps) {
  return (
    <>
      <Banner
        bannerSubtitle={bannerSubtitle}
        bannerTitle={bannerTitle}
        type={banner}
        bannerBg={bannerBg}
      />

      <div className='relative top-full pt-[6.25rem]'
        style={{ backgroundColor: "#001232" }}
      >
        {children}
      </div>
    </>
  );
}
