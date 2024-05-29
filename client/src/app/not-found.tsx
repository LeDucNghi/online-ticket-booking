"use client"

import * as React from 'react';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';
import { CustomButton } from '@/components/button/custom-button';
import Image from 'next/image';
import { images } from '@/constants';
import { useRouter } from 'next/navigation';

export interface INotFoundPageProps {
}

export default function NotFoundPage(props: INotFoundPageProps) {
    const router = useRouter()

    return (
        <div className='not-found-container w-full h-screen flex-center bg-[#001232]'>
            <div className='not-found-wrapper flex-center flex-col text-white' >
                <Image src={images.notFound} alt='not-found image' />

                <h3 className='capitalize font-bold text-[2.25rem] my-4'>oops... look like you got lost 😢</h3>

                <CustomButton
                    variant='contained'
                    className='font-bold'
                    onClick={() => router.push("/")}
                    active
                >
                    <>
                        back to home

                        <ArrowForwardIcon />
                    </>
                </CustomButton>
            </div>
        </div>
    );
}
