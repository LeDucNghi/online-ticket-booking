import "./item-card.scss"

import * as React from 'react';

import { Button, Divider, Paper } from '@mui/material';

import BookOnlineIcon from '@mui/icons-material/BookOnline';
import Image from "next/image";
import InfoIcon from '@mui/icons-material/Info';

export interface IItemCardProps {
    title: string
    image: string

    elevation?: number

    direction: "vertical" | "horizontal"

    style?: React.CSSProperties
}

export function ItemCard({ title, direction, image, elevation, style }: IItemCardProps) {
    return (
        <div className="card-container" style={style}>
            <Paper className="card-wrapper" elevation={elevation}>
                <div className="card-img">
                    <Image src={image} alt="movie image" width={100} height={100} />
                </div>

                <div className="card-content px-[1rem]">
                    <div className="card-title">
                        <h5
                            className="py-[1.5rem] capitalize font-semibold text-[1.5rem]"
                        >
                            {title}
                        </h5>
                    </div>

                    <Divider className="card-divider" />

                    <div className="card-action w-full flex-space-center py-[1.1rem]">
                        <Button
                            variant="outlined"
                            endIcon={<BookOnlineIcon />}
                        >
                            Books now
                        </Button>

                        <Button
                            variant="outlined"
                            endIcon={<InfoIcon />}
                        >
                            See detail
                        </Button>
                    </div>
                </div>
            </Paper>
        </div>
    );
}
