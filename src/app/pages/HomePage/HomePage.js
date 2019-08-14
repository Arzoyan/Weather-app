import React, { Component } from 'react';
import { connect } from "react-redux";
import selector from "../../services/selector";
import {
    getCurrentWeatherData, thisWeek,
    getWeekWeatherData, thisDayWeather,
    clearState,getCurrentLocationWeather
} from "../../modules/auth/Actions";
import DropdownCreator from "../WeekDropdown/DropdownCreator";
import { CITIES, CURRENT_WEEK } from "../../../configs/constants";
import WeatherShow from "../WeatherShow/WhaderShow";
import "./index.css"


class HomePage extends Component {

    state = {
        city: "yerevan",
        currentDay: null,
        weekWeather: null,
    }

    componentDidMount() {
        let currentWeek = CURRENT_WEEK();
     
        this.props.dispatch(thisWeek(currentWeek))
        this.props.dispatch(getCurrentLocationWeather())
        // this.props.dispatch(getCurrentWeatherData("Yerevan"))
        // this.props.dispatch(getWeekWeatherData("Yerevan"))
    }


    // change state and get new weather
    handleChange = (e) => {
        const { city } = this.state;
        this.props.dispatch(clearState());
        this.setState({
            [e.target.id]: e.target.value,
            currentDay: null,
            weekWeather: null,
        }, () => {
            this.props.dispatch(getCurrentWeatherData(city));
            this.props.dispatch(getWeekWeatherData(city));
        })
    }

    // check selected day
    handleCurrentValue = (day) => {
        const { showData } = this.props;
        if (showData && showData.length > 0 && day !== this.state.currentDay) {
            this.setState({
                currentDay: day
            }, () => {
                let weekWeather = showData.filter(wheader => wheader.dt_txt.slice(0, 10) === day);
                return !!weekWeather && this.props.dispatch(thisDayWeather(weekWeather))
            })
        }
    }

    render() {
        const { thisDayWeather, currentWeather, thisWeek } = this.props;
        const { city, currentDay } = this.state;
        return (
            <div className={"dashboard"}>
                <div>

                    {currentWeather && <WeatherShow weekData={currentWeather} type={"city"} city={city} />}

                </div>
                <div className="days-wrapper">
                    {
                        !!thisWeek && thisWeek.length > 0 ? this.props.thisWeek.map(e => {
                            return <DropdownCreator key={e} day={e} loadCustomData={this.handleCurrentValue}
                                className={e === currentDay ? "activ" : ""} />
                        }) : null
                    }
                    <select className="cities" id="city" onChange={(e) => { this.handleChange(e) }} >
                        {CITIES.map(city => {
                            return <option className="city" key={city} value={city}>{city}</option>
                        })}
                    </select>
                </div>
                <div>
                    {thisDayWeather && <WeatherShow weekData={thisDayWeather} type={"week"} />}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => selector(state, ["auth"]);

export default connect(mapStateToProps)(HomePage);