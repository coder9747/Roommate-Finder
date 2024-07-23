import { cn } from '@/lib/utils'
import React from 'react'

const MaxWidth = ({ className, children }: {
    className: string,
    children: React.ReactNode
}) => {
    return (
        <div className={cn(" px-5", className)}>
            {children}
        </div>
    )
}

export default MaxWidth
