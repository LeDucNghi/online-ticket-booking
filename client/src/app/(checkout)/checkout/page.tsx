import "./page.scss";

import CheckoutInfo from "../components/checkout-info";
import { MainLayout } from '@/components/Layouts/main/main-layout';
import { TicketInfo } from "../components/ticket-info";

export default function Checkout() {
    return (
        <MainLayout
            bannerTitle='venus'
            bannerSubtitle='City Walk English - 2D'
            banner='plan'
            bannerBg="/assets/banner02.jpg"
        >
            <div className="checkout-wrapper py-[7.5rem]">
                <CheckoutInfo />

                <TicketInfo />
            </div>
        </MainLayout>
    );
}
