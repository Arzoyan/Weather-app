import React from 'react';
import "./index.css"

const WeatherShow = (props) => {
    const { weekData, type, city } = props

    switch (type) {
        case "week":
            return weekData.length > 0 ?
                <>
                    {weekData && <table>
                        <tbody>{
                            weekData.map((data, index) => {
                                return <tr key={index}>
                                    <th>{data.dt_txt} </th>
                                    <th>{data.main.temp} K</th>
                                    <th> {data.weather[0].description}</th>
                                </tr>
                            })
                        }
                        </tbody>
                    </table>}
                </> : <h1> Sorry there are no information yet</h1>
        case "city":
            return <>
                <div className={"current-weather"}>
                    <label className="weather-header">
                        {city}:
                    </label>
                    <p className="weather-body">  {weekData.temp} K  </p>
                </div>
            </>
        default: return null
    }

}


export default WeatherShow;