import { SunIcon } from "@heroicons/react/solid"

function Loading() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-bg_from to-bg_to p-4 flex flex-col items-center justify-center text-secondary">
            <SunIcon
                className="h-24 w-24 animate-bounce text-yellow-500"
                color="yellow"
            />
            <h1 className="sm:text-6xl text-4xl font-bold mb-10 animate-pulse">
                Weather Wizardry
            </h1>
            <h2 className="text-xl font-bold mb-10 animate-pulse">
                Embrace the Enchantment of Meteorological Marvels!
            </h2>
        </div>
    )
}

export default Loading