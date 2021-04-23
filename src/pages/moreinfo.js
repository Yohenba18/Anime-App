import React, { useContext, useEffect, useState } from 'react';
import SingleAnime from '../components/SingleAnime';
import { SearchContext } from '../context/search';
import {  Typography } from '@material-ui/core';

function Moreinfo() {

    const search = useContext(SearchContext);
    const [dataExist, setDataExist] = useState(true);

    useEffect(() => {
        if(search.singleData === undefined ||  Object.keys(search.singleData).length === 0){
            try{
                search.setSingle(JSON.parse(localStorage.getItem('singleData')))
                setDataExist(true);
            }catch(e){
                console.log(e);
                setDataExist(false)
            } 
        }
        console.log(search);
    },[search])
    return (
        <div>
            {(dataExist && <SingleAnime info={search.singleData}/>) || (<Typography varient="h4" component="h2">Nope</Typography>)}
        </div>
    )
}

export default Moreinfo
