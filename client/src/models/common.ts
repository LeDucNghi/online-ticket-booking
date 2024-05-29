import { ReactElement, ReactNode } from "react"

import { AppProps } from "next/app"
import { EmotionCache } from "@emotion/react"
import { NextPage } from "next"

export interface LayoutProps {
    children: ReactNode
}

export type NextPageWithLayout = NextPage & {
    Layout?: (props: LayoutProps) => ReactElement
    requireLogin?: boolean
}

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
    emotionCache?: EmotionCache
}