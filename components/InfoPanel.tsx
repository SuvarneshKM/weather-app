import Image from "next/image";
import CityPicker from "./CityPicker";
import weatherCodeToString from "./lib/weatherCodeToString";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

type Props = {
    city: string;
    result: Root;
    lat: string;
    long: string;
}
function InfoPanel({ city, result, lat, long }: Props) {
    return (
        <div className="bg-gradient-to-br from-bg_from to-bg_to text-white p-10">
            <div className="pb-5">
                <h1 className="sm:text-6xl text-4xl font-bold">{decodeURI(city)}</h1>
                <p className="text-xs text-sidebar">
                    Long/Lat: {long}, {lat}
                </p>
            </div>
            <CityPicker />
            <hr className="bg-divider h-[2px] my-10" />
            <div className="ml-5 flex items-center justify-between space-x-10 mb-5">
                <div>
                    <p className="text-xl">
                        {new Date().toLocaleDateString("en-GB", {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </p>
                    <p className="font-extralight">
                        Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
                    </p>
                </div>
                <p className="text-xl font-bold uppercase">
                    {new Date().toLocaleTimeString("en-GB", {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true
                    })}
                </p>
            </div>
            <hr className="bg-divider h-[2px] mt-10 mb-5" />

            <div className="flex items-center justify-between">
                <div>
                    <Image
                        src={`https://www.weatherbit.io/static/img/icons/${weatherCodeToString[result.current_weather.weathercode].icon
                            }.png`}
                        alt={weatherCodeToString[result.current_weather.weathercode].label}
                        width={75}
                        height={75}
                    />
                    <div className="flex items-center justify-between space-x-10">
                        <p className="sm:text-6xl text-4xl font-semibold">{result.current_weather.temperature.toFixed(1)}°C</p>
                        <p className="text-right font-extralight text-lg">
                            {weatherCodeToString[result.current_weather.weathercode].label}
                        </p>
                    </div>
                </div>
            </div>
            <div className="space-y-2 py-5">
                <div className="flex items-center space-x-2 px-4 py-3 border border-secondary hover:border-sidebar rounded-md bg-sidebar/20">
                    <SunIcon className="w-10 h-10 text-sidebar" />
                    <div className="flex-1 flex justify-between items-center">
                        <p className="font-extralight">Sunrise</p>
                        <p className="uppercase text-2xl">
                            {new Date(result.daily.sunrise[0]).toLocaleTimeString("en-Gb", {
                                hour: "numeric",
                                minute: "numeric",
                                hour12: true
                            })}
                        </p>
                    </div>
                </div>
                <div className="flex items-center space-x-2 px-4 py-3 border border-secondary hover:border-sidebar rounded-md bg-sidebar/20">
                    <MoonIcon className="w-10 h-10 text-sidebar" />
                    <div className="flex-1 flex justify-between items-center">
                        <p className="font-extralight">Sunset</p>
                        <p className="uppercase text-2xl">
                            {new Date(result.daily.sunset[0]).toLocaleTimeString("en-Gb", {
                                hour: "numeric",
                                minute: "numeric",
                                hour12: true
                            })}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoPanel