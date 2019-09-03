import React from 'react';
import "./index.css";
import calendar from "../../../img/calendar.png";

const DayOfWeeks = (props) => {
    const { day, loadCustomData, className } = props;

    return <>
        <div className={`week ${className}`} onClick={() => loadCustomData(day)} > {day} <img alt="calendar" className="calendar" src={calendar} /> </div>
    </>
}

export default DayOfWeeks
