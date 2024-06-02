import "./banner.scss";

import * as React from 'react';

import CustomSelect from "../custom-select/Select";
import Image from 'next/image';
import { Tab } from "../tab/tab";
import { TextField } from "@mui/material";
import { images } from '@/constants';

export interface IBannerProps {
    bannerBg: string

    type: "main" | "plan"

    bannerTitle: string
    bannerSubtitle?: string

    children?: React.ReactNode
}

export function Banner({ bannerBg, type, bannerSubtitle, bannerTitle, children }: IBannerProps) {
    return (
        <div className={`banner-container ${type === "plan" ? "plan" : "main"}`} >

            <div className="banner-image">
                <Image src={bannerBg} alt='banner image' priority layout="fill" />
            </div>

            <div className="banner-content">
                {type === "main"
                    ? <h1> get <span> {bannerTitle} tickets </span> </h1>
                    : <h1> {bannerTitle} </h1>
                }

                <p> {bannerSubtitle} </p>
            </div>

            {type === "main" ?
                <Tab className="banner-tab"
                    bgUrl={images.ticketBg.src}
                >
                    <div className="tab-content">
                        <div className="tab-area w-full flex-space-center">
                            <TextField id="standard-basic" label="Search for Movies" variant="standard" />

                            <div className="filter-area flex-center">
                                <Image src={images.city} alt="image" />
                                <span>City</span>
                                <CustomSelect label="City" />
                            </div>

                            <div className="filter-area flex-center">
                                <Image src={images.date} alt="image" />
                                <span>Date</span>
                                <CustomSelect label="Date" />
                            </div>

                            <div className="filter-area flex-center">
                                <Image src={images.cinema} alt="image" />
                                <span>Cinema</span>
                                <CustomSelect label="Cinema" />
                            </div>
                        </div>
                    </div>
                </Tab>
                :
                <div className="banner-footer">
                    {children}
                </div>
            }
        </div>
    );
}
