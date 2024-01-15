import React, { useRef } from 'react'

const Weather = ({ searchData, searchChange, handleApi, weatherData }) => {
    const SearchInput = useRef()
    return (
        <>
            <div className='w-md-full mx-auto h-md-fit text-center my-auto backdrop-blur-lg rounded-xl border-2 border-white p-4 space-y-6'>
                <h1 className='text-center text-3xl font-bold text-orange-200'>Weather App</h1>
                <div className="flex mt-4">
                    <input type='search' value={searchData} onChange={() => searchChange(SearchInput.current.value)} ref={SearchInput} className='border-none w-80 px-2 py-1 outline-none' />
                    <button className='bg-orange-500 border-none outline-none py-1 px-2 text-white' onClick={handleApi}>Search</button>
                </div>

                {/* ------------------------------Temp Result -------------------------*/}

                {
                    searchData === "" ? weatherData.name = <div className='text-2xl text-red-400'>Enter Place name</div> :
                        <>
                            <div className="text-3xl text-orange-200">{!weatherData.name ? "Enter correct place name" : weatherData.name}</div>
                            <div className="flex justify-around items-center text-orange-200 text-2xl">
                                <div>
                                    <p className='text-yellow-300'>Min-Temp</p>
                                    {!weatherData.main ? "---" : weatherData.main.temp_min}°C
                                </div>
                                <div>
                                    <p className='text-yellow-300'>Max-Temp</p>
                                    {!weatherData.main ? "---" : weatherData.main.temp_max}°C
                                </div>
                            </div>
                            <div className="flex justify-around text-orange-200 text-2xl">
                                <div>
                                    <img src={`https://openweathermap.org/img/wn/${!weatherData.weather ? "---" : weatherData.weather[0].icon}@2x.png`} />
                                </div>
                                <div className='flex justify-center items-center'>
                                    {!weatherData.weather ? "---" : weatherData.weather[0].main}
                                </div>
                            </div>
                        </>
                }

            </div>
        </>
    )
}
export default Weather;
