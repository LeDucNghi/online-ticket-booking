import * as React from 'react';

export interface IuseWindowProps {
}

export function useWindowSize(props: IuseWindowProps) {
    const [windowInnerWidth, setWindowInnerWidth] = React.useState(
        window.innerWidth
    );
    const [windowInnerHeight, setWindowInnerHeight] = React.useState(
        window.innerHeight
    );

    React.useEffect(() => {
        const handleResize = () => {
            setWindowInnerHeight(window.innerHeight);
            setWindowInnerWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return { windowInnerWidth, windowInnerHeight };
}
