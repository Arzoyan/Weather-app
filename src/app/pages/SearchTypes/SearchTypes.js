import React from 'react';
import { CITIES } from '../../../configs/constants';
import SelectOption from '../../../components/SelectOption';
import "./index.css"





const SearchTypes = (props) => {
    const { handleChange, handleSearchLocation } = props
    return <>

        <div>
            <button onClick={() => { handleSearchLocation() }}>
                search by lokation
            </button>
        </div>
        <SelectOption _id="city" options={CITIES} handleChange={handleChange} />
        <div>
        </div>
    </>

}


export default SearchTypes;