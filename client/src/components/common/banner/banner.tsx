import "./banner.scss"

import * as React from 'react';

import CustomSelect from "../custom-select/Select";
import Image from 'next/image';
import { Tab } from "../tab/tab";
import { TextField } from "@mui/material";
import { images } from '@/constants';

export interface IBannerProps {
    bannerBg: string
}

export function Banner({ bannerBg }: IBannerProps) {
    return (
        <div className='banner-container' >

            <div className="banner-image">
                <Image src={bannerBg} alt='banner image' priority layout="fill"
                />
            </div>

            <div className="banner-content">
                <h1>get <span>movie</span> tickets</h1>

                <p>Buy movie tickets in advance, find movie times watch trailers, read movie reviews and much more</p>
            </div>

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
        </div>
    );
}
