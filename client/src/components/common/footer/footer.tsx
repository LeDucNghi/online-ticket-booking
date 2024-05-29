"use client"

import "./footer.scss";

import { Button, IconButton } from "@mui/material";

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import Image from "next/image";
import InstagramIcon from '@mui/icons-material/Instagram';
import { Tab } from "../tab/tab";
import { images } from "@/constants";
import { usePathname } from "next/navigation";

export interface IFooterProps {
}

export function Footer(props: IFooterProps) {
    const pathname = usePathname()

    if (pathname?.startsWith("/sign")) return

    return (
        <footer>
            <Image src={images.footerShape} alt="" layout="fill" />

            <Tab
                className="footer-newsletter"
                bgUrl={images.newsLetter.src}
                title="SUBSCRIBE TO BOLETO"
                subtitle="TO GET EXCLUSIVE BENIFITS"
            >
                <div className="newsletter-wrapper">

                    <div className="newsletter-subcribe">
                        <input type="text" placeholder="Your Email Address" />
                        <button>subcribe</button>
                    </div>

                    <p>We respect your privacy, so we never share your info</p>

                </div>
            </Tab>

            <div className="footer-content">
                <div className="content footer-top">
                    <div className="footer-logo">
                        <Image src={images.logo} alt="logo" />
                    </div>

                    <ul className="footer-social">
                        <li>
                            <IconButton className="icon">
                                <FacebookOutlinedIcon />
                            </IconButton>
                        </li>

                        <li>
                            <IconButton className="icon">
                                <InstagramIcon />
                            </IconButton>
                        </li>

                        <li>
                            <IconButton className="icon">
                                <GoogleIcon />
                            </IconButton>
                        </li>
                    </ul>
                </div>

                <div className="content footer-bottom">
                    <p>Copyright © 2020.All Rights Reserved By <a href="">Bolero</a> </p>

                    <ul>
                        <li>
                            <Button >about</Button>
                        </li>
                        <li>
                            <Button>terms of use</Button>
                        </li>
                        <li>
                            <Button>privacy policy</Button>
                        </li>
                        <li>
                            <Button>FAQ</Button>
                        </li>
                        <li>
                            <Button>feedback</Button>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
