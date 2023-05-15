"use client";
import { Card, Metric, Text } from "@tremor/react"
import Image from "next/image"
import { useState } from "react"

type Props = {
    title: string;
    metric: string;
    icon: string;
}

function StaticCard({ title, metric, icon }: Props) {
    const [isHigh, setIsHigh] = useState(false)
    return (
        <Card className="flex shadow-none ring-0 w-full items-center bg-card p-4">
            <div className="flex space-x-4 items-center">
                <div className="relative w-8 h-8">
                    <Image
                        src={`/icons/${icon}.png`}
                        alt={`${icon}`}
                        fill
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <Text>{title}</Text>
                    <Metric>{metric}</Metric>
                </div>
            </div>
        </Card>
    )
}

export default StaticCard