"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Subtitle, Text, Divider } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bg_from to-bg_to p-4 flex flex-col items-center justify-center">
      <Card className="text-primary max-w-3xl text-center">
        <Text className="sm:text-6xl text-4xl font-bold mb-10">Weather App</Text>
        <Subtitle className="text-xl">This is a learn build by me to build to my passion</Subtitle>
        <Divider className="my-10" />
        <Card className="bg-gradient-to-br from-bg_from to-bg_to">
          <CityPicker />
        </Card>
      </Card>
    </div>
  )
}
