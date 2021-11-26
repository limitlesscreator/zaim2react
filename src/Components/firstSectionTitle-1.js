import React, {useReducer, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";




export const FirstSectionTitle1 = () => {
    const city = useSelector(state => state.city)
    const getStorageCity = localStorage.getItem("city")
    console.log(city)
    return (
        <>
            <h1 className='h1'><span className='h1-span'>Кредит под залог ПТС</span>{getStorageCity ? getStorageCity : 'В Москве'}</h1>
        </>
    );
};
