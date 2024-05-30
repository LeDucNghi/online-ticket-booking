import "./banner.scss"

import * as React from 'react';

import CustomSelect from "../custom-select/Select";
import Image from 'next/image';
import { PageBanner } from "./page-banner";
import { PlanBanner } from "./plan-banner";
import { Tab } from "../tab/tab";
import { TextField } from "@mui/material";
import { images } from '@/constants';

export interface IBannerProps {
    bannerBg: string

    type: "main" | "plan"
}

export function Banner({ bannerBg, type }: IBannerProps) {
    return (
        <>
            {type === "main" ? <PlanBanner bannerBg={bannerBg} /> : <PageBanner bannerBg={bannerBg} />}
        </>
    );
}
