"use client"

import { CustomButton } from "@/components/button/custom-button";
import { ItemCard } from "@/components/item-card/item-card";
import { Movie } from "@/models";
import { useState } from "react";

export interface HomeSection {
    sectionTitle: string
    sectionSubtitle: string

    active?: number

    list?: Movie[]
    style?: React.CSSProperties
}

export const HomeSection = ({ sectionTitle, sectionSubtitle, list, style }: HomeSection) => {
    const [active, setActive] = useState<number>(1);

    const activeLink = (num: number) => {
        setActive(num)
    }

    return (
        <div className="section w-full py-[7.5rem] flex-center" style={style}>
            <div className="section-tab w-[70%] h-4/5">
                <div className="tab-header mb-[3.75rem] flex-space-center">

                    <div className="left">
                        <h2 className="uppercase text-white font-bold text-[3.125rem]"> {sectionTitle} </h2>
                        <p className="font-semibold text-gray-300"> {sectionSubtitle} </p>
                    </div>

                    <div className="right flex-space-center">
                        <CustomButton
                            variant="outlined"
                            className="uppercase text-white font-bold"
                            onClick={() => activeLink(1)}
                            active={active === 1 ? true : false}
                        >
                            now showing
                        </CustomButton>

                        <CustomButton
                            variant="outlined"
                            className="uppercase text-white font-bold mx-2"
                            onClick={() => activeLink(2)}
                            active={active === 2 ? true : false}
                        >
                            coming soon
                        </CustomButton>

                        <CustomButton
                            variant="outlined"
                            className="uppercase text-white font-bold"
                            onClick={() => activeLink(3)}
                            active={active === 3 ? true : false}
                        >
                            exclusive
                        </CustomButton>
                    </div>

                </div>

                <div className="tab-carousel flex w-full">
                    {list?.slice(0, 4)?.map((item, key) => {
                        return <ItemCard
                            direction="vertical"
                            image={item.banner}
                            title={item.name}
                            key={key}
                            elevation={10}
                            style={{ width: "25%" }}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}