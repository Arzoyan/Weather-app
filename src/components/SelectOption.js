import React from 'react';

const SelectOption = (props) => {
    const { handleChange, options, _id, className } = props;

    return <>
        <select className={className} id={_id} onChange={(e) => { handleChange({ [e.target.id]: e.target.value }) }} >
            {options.map(option => {
                return <option className="city" key={option} value={option}>
                    {option}
                </option>
            })}
        </select>
    </>
}

export default SelectOption
