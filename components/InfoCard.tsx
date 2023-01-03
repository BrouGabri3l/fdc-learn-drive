import React, { PropsWithChildren } from 'react'

interface InfoCardProps{
    className?:string,
    strongColor:string,
    strongText:string,
}

export default function InfoCard(props:PropsWithChildren<InfoCardProps>) {
    const {className,strongColor,strongText,children} = props
    return (
        <p className={`infocard ${className}`}>
            <strong className={`infocard-strong ${strongColor}`}>
                {strongText}
            </strong>
            {children}
        </p>
    )
}
