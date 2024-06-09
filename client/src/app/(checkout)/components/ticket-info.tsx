import "../checkout/page.scss"

import * as React from 'react';

import { CustomButton } from '@/components/common/button/custom-button';
import { Paper } from '@mui/material';

export interface ITicketInfoProps {
    hasCombo: boolean

}

export default function TicketInfo({ hasCombo }: ITicketInfoProps) {
    return (
        <div className="checkout-ticket checkout-child">
            <Paper className="booking-area">
                <div className="booking-summary">
                    <h4 className="uppercase">booking summary</h4>

                    <ul className="my-[1.875rem] ticket-info">
                        <li className="mb-4">
                            <h6 className="subtitle">
                                venus
                            </h6>

                            <span className="info">
                                ENGLISH - 2D
                            </span>
                        </li>

                        <li className="mb-4">
                            <h6 className="subtitle">
                                <span> city walk </span>
                                <span> 02 </span>
                            </h6>

                            <div className="info">
                                <span> 10 sep tue, 11:00 pm </span>
                                <span> TICKETS </span>
                            </div>
                        </li>

                        <li className="mb-8">
                            <h6 className="subtitle flex justify-between">
                                <span> tickets price </span>
                                <span> 150$ </span>
                            </h6>
                        </li>
                    </ul>

                    <ul className="my-[1.875rem]">
                        <li className="mb-4">
                            <h6 className="subtitle flex justify-between">
                                <span className="uppercase font-semibold">
                                    combo
                                </span>

                                <span>
                                    $57
                                </span>
                            </h6>

                            <span className="info uppercase">
                                2 nachos combo
                            </span>
                        </li>

                        <li className="mb-8">
                            <h6 className="subtitle uppercase">
                                food & bevarage
                            </h6>
                        </li>
                    </ul>

                    <div className="ticket-price">
                        <span className="info">
                            <span>price</span>
                            <span>$207</span>
                        </span>
                        <span className="info">
                            <span>VAT</span>
                            <span>$15</span>
                        </span>
                    </div>

                </div>
            </Paper>

            <Paper elevation={5} className="proceed-area">
                <h6 className="subtitle">
                    <span>amount payable</span>
                    <span>$222</span>
                </h6>

                <div className="flex-center mt-4">
                    <CustomButton active>
                        <p className="text-white ">
                            proceed
                        </p>
                    </CustomButton>
                </div>
            </Paper>
        </div>
    );
}
