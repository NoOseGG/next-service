import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
    className?: string
    title: string
}

const Title: React.FC<Props> = ({ className, title }) => {
    return (
        <div className={cn('font-bold', className)}>{title}</div>
    )
}

export default Title