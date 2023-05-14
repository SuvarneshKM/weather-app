import { getClient } from "@/apollo-client";
import StaticCard from "@/components/staticCard";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";

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
        <div className="">
            {/* info panel */}
            <div>
                <div className="p-5">
                    <h2 className="text-xl font-bold text-primary">Todays Overview</h2>
                    <p className="text-sm text-secondary">
                        Last Updated at:{" "}
                        {new Date(result.current_weather.time).toDateString()}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default WeatherPage