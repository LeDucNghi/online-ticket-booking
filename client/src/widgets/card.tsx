import * as React from 'react';

export interface ICardProps {
    title: string
    isDivider?: boolean

    children?: React.ReactNode
}

export function Card({ title, isDivider, children }: ICardProps) {
    return (
        <div className='p-8 bg-dark-blue'>

        </div>
    );
}
