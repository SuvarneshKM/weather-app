"use client";
import { Card, Metric, Text } from "@tremor/react"
import Image from "next/image"
import { useState } from "react"

function StaticCard() {
    const [isHigh, setIsHigh] = useState(false)
    return (
        <div className="flex">
            <Card className="flex shadow-none ring-0 w-auto space-x-4 items-center bg-card p-4">
                <div className="flex space-x-4 items-center">
                    <div className="relative w-8 h-8">
                        <Image
                            src="/icons/wind-speed.png"
                            alt="wind-speed"
                            fill
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <Text>Wind Speed</Text>
                        <Metric>14.4m/s</Metric>
                    </div>
                </div>
                <div className="flex items-center space-x-1">
                    {isHigh ?
                        <div className="border-solid border-t-bg_from border-t-8 border-x-transparent border-x-8 border-b-0"></div>
                        :
                        <div className="border-solid border-b-error border-b-8 border-x-transparent border-x-8 border-t-0"></div>
                    }
                    <Text>8m/s</Text>
                </div>
            </Card>
        </div>
    )
}

export default StaticCard