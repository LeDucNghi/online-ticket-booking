import "./loading.scss"

import * as React from 'react';

export interface ILoadingProps {
}

export function Loading(props: ILoadingProps) {
    return (
        <div className="loader w-full h-screen bg-black flex-center">
            <div data-glitch="Loading..." className="glitch">Loading...</div>
        </div>
    );
}
