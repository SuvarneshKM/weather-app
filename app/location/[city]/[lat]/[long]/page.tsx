import { getClient } from "@/apollo-client";
import HumidityChart from "@/components/HumidityChart";
import InfoPanel from "@/components/InfoPanel";
import RainChart from "@/components/RainChart";
import TempChart from "@/components/TempChart";
import StaticCard from "@/components/staticCard";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";
import { Divider } from "@tremor/react";

type Props = {
    params: {
        city: string;
        lat: string;
        long: string;
    }
}
async function WeatherPage({ params: { city, lat, long } }: Props) {
    const client = getClient();

    const { data } = await client.query({
        query: fetchWeatherQuery,
        variables: {
            current_weather: "true",
            latitude: lat,
            longitude: long,
            timezone: 'GMT'
        }
    })

    const result: Root = data.myQuery;

    console.log(result)

    return (
        <div className="flex flex-col min-h-screen md:flex-row">
            <InfoPanel city={city} long={long} lat={lat} result={result} />
            <div className="flex-1 p-5 lg:p-10 max-w-5xl">
                <div className="p-5">
                    <h2 className="text-xl font-bold text-primary">Todays Overview</h2>
                    <p className="text-sm text-secondary">
                        Last Updated at:{" "}
                        {new Date(result.current_weather.time).toDateString()}
                    </p>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 p-5">
                    <StaticCard
                        title="Maximum Temperature"
                        metric={`${result.daily.temperature_2m_max[0].toFixed(1)}°`}
                        icon="max-temperature"
                    />
                    <StaticCard
                        title="Minimum Temperature"
                        metric={`${result.daily.temperature_2m_min[0].toFixed(1)}°`}
                        icon="min-temperature"
                    />
                    <StaticCard
                        title="uv Index"
                        metric={result.daily.uv_index_max[0].toFixed(1)}
                        icon="uv-index"
                    />
                    <div className="flex lg:flex-row flex-col space-y-5 lg:space-y-0 lg:space-x-3">
                        <StaticCard
                            title="Wind Speed"
                            metric={`${result.current_weather.windspeed.toFixed(1)}m/s`}
                            icon="wind-speed"
                        />
                        <StaticCard
                            title="Wind Direction"
                            metric={`${result.current_weather.winddirection.toFixed(1)}°`}
                            icon="wind-direction"
                        />
                    </div>
                </div>
                <hr className="bg-sidebar h-[2px] mb-5" />
                <div className="space-y-3">
                    <TempChart results={result} />
                    <RainChart results={result} />
                    <HumidityChart results={result} />
                </div>
            </div>
        </div>
    )
}

export default WeatherPage